"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// A simple manual CSV parser
function parseCSV(csvText: string) {
  const lines = csvText.split('\n').filter(line => line.trim() !== '');
  if (lines.length < 2) return [];
  
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  const results = [];
  
  for (let i = 1; i < lines.length; i++) {
    // Simple split by comma (doesn't handle commas inside quotes well, but good enough for test data)
    const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
    const obj: any = {};
    headers.forEach((header, index) => {
      obj[header] = values[index];
    });
    results.push(obj);
  }
  return results;
}

export async function uploadTestDataset(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "No file uploaded" };
    }

    const text = await file.text();
    let data: any[] = [];

    if (file.name.endsWith('.json')) {
      data = JSON.parse(text);
    } else if (file.name.endsWith('.csv')) {
      data = parseCSV(text);
    } else {
      return { success: false, error: "Unsupported file format. Please upload CSV or JSON." };
    }

    let processedCount = 0;

    // Process each record
    for (const record of data) {
      const companyName = record.companyName || "Unknown Bidder";
      const gstn = record.gstn || "";
      const pan = record.pan || "";
      const udyam = record.udyam || "";
      
      // If tenderId isn't provided, just grab the first active tender to assign it to
      let tenderId = record.tenderId;
      if (!tenderId) {
        const firstTender = await prisma.tender.findFirst({ where: { status: "Active" } });
        tenderId = firstTender?.id || "t-1001";
      }

      // Calculate compliance score
      let score = 100;
      let flags: {type: string, message: string}[] = [];

      if (!gstn) {
        score -= 30;
        flags.push({ type: 'missing', message: 'GSTN is missing' });
      } else if (gstn.length !== 15) {
        score -= 20;
        flags.push({ type: 'warning', message: 'GSTN format is invalid' });
      }

      if (!pan) {
        score -= 25;
        flags.push({ type: 'missing', message: 'PAN is missing' });
      } else if (pan.length !== 10) {
        score -= 15;
        flags.push({ type: 'warning', message: 'PAN format is invalid' });
      }

      if (!udyam) {
        score -= 20;
        flags.push({ type: 'missing', message: 'Udyam Registration is missing' });
      }

      // Add some random variation
      score -= Math.floor(Math.random() * 10);
      score = Math.max(0, Math.min(100, score)); // Clamp between 0-100

      // Assign Risk Tag
      let riskTag = "Low";
      if (score < 50) riskTag = "High";
      else if (score < 80) riskTag = "Medium";

      // Insert into Prisma
      await prisma.bidder.create({
        data: {
          companyName,
          tenderId,
          status: "Pending",
          complianceScore: score,
          riskTag,
          gstn,
          pan,
          udyam,
          flags: JSON.stringify(flags),
        }
      });
      
      // Optionally update the bidsCount on the tender
      await prisma.tender.update({
        where: { id: tenderId },
        data: { bidsCount: { increment: 1 } }
      });

      processedCount++;
    }

    revalidatePath('/officer/dashboard');
    return { success: true, count: processedCount };
  } catch (error: any) {
    console.error("Upload error:", error);
    return { success: false, error: error.message || "Failed to process dataset" };
  }
}

"use client";

import { useState } from "react";
import { uploadTestDataset } from "@/actions/uploadDataset";
import { UploadCloud, Loader2, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UploadDatasetButton() {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    const result = await uploadTestDataset(formData);
    
    if (result.success) {
      alert(`Successfully processed ${result.count} bidders! AI Risk scores have been calculated and the dashboard has been updated.`);
    } else {
      alert(`Error: ${result.error}`);
    }
    
    setIsUploading(false);
    // Reset file input
    e.target.value = '';
  };

  return (
    <div className="relative inline-block">
      <input 
        type="file" 
        accept=".csv,.json" 
        onChange={handleFileChange} 
        disabled={isUploading}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed z-10"
      />
      <Button 
        variant="outline" 
        className="rounded-none border-cyan-500 text-cyan-700 hover:bg-cyan-50 hover:text-cyan-800 transition-colors bg-white font-semibold flex items-center shadow-sm"
        disabled={isUploading}
      >
        {isUploading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <FileSpreadsheet className="mr-2 h-4 w-4" />
        )}
        {isUploading ? "Processing AI Analysis..." : "Upload Test Dataset (CSV/JSON)"}
      </Button>
    </div>
  );
}

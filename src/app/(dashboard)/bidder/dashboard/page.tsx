"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { mockTenders } from "@/lib/mock-data";
import { Search, ArrowRight, ShieldCheck, FileCheck } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function BidderDashboard() {
  const openTenders = mockTenders.filter(t => t.status === 'Active');

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-4 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">MSME Portal</h2>
          <p className="text-slate-600 mt-1">Find tenders, pre-verify your documents, and submit bids.</p>
        </div>
        <Link 
          href="/bidder/self-check" 
          className={cn(buttonVariants({ variant: "default" }), "bg-orange-500 hover:bg-orange-600 shadow-md transition-all hover:-translate-y-0.5 text-white")}
        >
          <ShieldCheck className="mr-2 h-5 w-5" /> Run Pre-Bid Self-Check
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-slate-900 text-white border-0 shadow-lg transform transition-all hover:scale-[1.02] duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-slate-300 uppercase tracking-wider">My Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold">2</div>
            <p className="text-sm text-slate-400 mt-2">Pending review</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200 shadow-lg transform transition-all hover:scale-[1.02] duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-green-800 uppercase tracking-wider">Compliance Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold text-green-700">92%</div>
            <p className="text-sm text-green-600 mt-2">Based on last pre-check</p>
          </CardContent>
        </Card>
        <Card className="bg-orange-50 border-orange-200 shadow-lg transform transition-all hover:scale-[1.02] duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-orange-800 uppercase tracking-wider">Matched Tenders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold text-orange-700">{openTenders.length}</div>
            <p className="text-sm text-orange-600 mt-2">Based on MSME category</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg border-slate-200">
        <CardHeader className="bg-slate-50 border-b pb-4">
          <CardTitle className="text-xl">Recommended Tenders</CardTitle>
          <CardDescription>Active procurements matching your company profile.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {openTenders.map((tender) => (
              <div key={tender.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                <div className="space-y-1 mb-4 md:mb-0">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-slate-800">{tender.title}</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <p className="text-sm text-slate-500 line-clamp-1">{tender.description}</p>
                  <div className="flex space-x-4 text-xs text-slate-500 pt-1">
                    <span><strong>Budget:</strong> {tender.budget}</span>
                    <span><strong>Deadline:</strong> {tender.deadline}</span>
                    <span><strong>Dept:</strong> {tender.department}</span>
                  </div>
                </div>
                <div className="flex space-x-2 shrink-0">
                  <Button variant="outline" size="sm">Details</Button>
                  <Link 
                    href={`/bidder/apply/${tender.id}`}
                    className={cn(buttonVariants({ size: "sm" }), "bg-slate-800 hover:bg-slate-900")}
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

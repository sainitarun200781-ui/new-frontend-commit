"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { mockTenders } from "@/lib/mock-data";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function ApplyIndexPage() {
  const openTenders = mockTenders.filter(t => t.status === 'Active');

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">Submit a New Bid</h2>
        <p className="text-slate-500">Select an active tender below to begin the application and submission process.</p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input placeholder="Search active tenders by ID or keywords..." className="pl-9 bg-white" />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="space-y-4">
        {openTenders.map((tender) => (
          <Card key={tender.id} className="hover:border-teal-500 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <CardTitle className="text-lg">{tender.title}</CardTitle>
                    <Badge variant="secondary" className="bg-teal-100 text-teal-800">Active</Badge>
                  </div>
                  <CardDescription>Tender ID: {tender.id} • {tender.department}</CardDescription>
                </div>
                <Link 
                  href={`/bidder/apply/${tender.id}`}
                  className={cn(buttonVariants({ variant: "default" }), "bg-slate-800 hover:bg-slate-900")}
                >
                  Start Application <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-6 text-sm text-slate-600 bg-slate-50 p-3 rounded-md border">
                <div>
                  <span className="font-semibold text-slate-800 block">Est. Budget</span>
                  {tender.budget}
                </div>
                <div>
                  <span className="font-semibold text-slate-800 block">Submission Deadline</span>
                  {tender.deadline}
                </div>
                <div>
                  <span className="font-semibold text-slate-800 block">Current Applicants</span>
                  {tender.bidsCount}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

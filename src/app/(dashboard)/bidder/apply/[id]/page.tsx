"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function BidSubmission() {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">Bid Submission Wizard</h2>
        <p className="text-slate-500">Tender ID: {params.id}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Submit Your Bid</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-medium">Ready to Submit?</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Please ensure you have run the Pre-Bid Self-Check tool to verify all documents before final submission.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
            <Button onClick={() => router.push('/bidder/dashboard')} className="bg-teal-600 hover:bg-teal-700">Confirm Submission</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

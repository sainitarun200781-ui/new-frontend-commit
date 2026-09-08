"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Activity, ShieldCheck, AlertTriangle, FileSearch, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfficerAuditLogsPage() {
  const auditLogs = [
    { id: 'LOG-001', time: '10:45 AM, Today', user: 'System (AI Core)', event: 'Document Tampering Detected', details: 'Pixel anomaly found in BID-103 financial statement.', severity: 'High' },
    { id: 'LOG-002', time: '10:03 AM, Today', user: 'System (API)', event: 'Statutory Verification', details: 'GSTN and PAN verification passed for BID-101.', severity: 'Info' },
    { id: 'LOG-003', time: '09:15 AM, Today', user: 'Officer A. Sharma', event: 'Bid Approved', details: 'BID-201 approved for Tender TND-2026-002.', severity: 'Medium' },
    { id: 'LOG-004', time: '08:30 AM, Today', user: 'System (API)', event: 'Udyam Cert Expired', details: 'BID-102 Udyam registration flagged as expired.', severity: 'Medium' },
    { id: 'LOG-005', time: 'Yesterday', user: 'System (OCR)', event: 'Metadata Extraction', details: 'Successfully extracted metadata for 12 incoming documents.', severity: 'Info' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">System Audit Logs</h2>
          <p className="text-slate-600 mt-1">Immutable record of all AI verifications, API calls, and officer actions.</p>
        </div>
        <Button variant="outline" className="flex items-center">
          <Filter className="mr-2 h-4 w-4" /> Filter Logs
        </Button>
      </div>

      <Card className="shadow-md">
        <CardHeader className="bg-slate-50 border-b pb-4">
          <CardTitle className="flex items-center">
            <Activity className="mr-2 h-5 w-5 text-slate-700" />
            Global Activity Feed
          </CardTitle>
          <CardDescription>Chronological events across all active tenders.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Actor / Source</TableHead>
                <TableHead>Event Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Severity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="text-slate-500 whitespace-nowrap">{log.time}</TableCell>
                  <TableCell className="font-medium text-slate-700">{log.user}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {log.severity === 'High' && <AlertTriangle className="mr-2 h-4 w-4 text-red-500" />}
                      {log.severity === 'Info' && <FileSearch className="mr-2 h-4 w-4 text-blue-500" />}
                      {log.severity === 'Medium' && <ShieldCheck className="mr-2 h-4 w-4 text-orange-500" />}
                      {log.event}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600">{log.details}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={
                      log.severity === 'High' ? 'bg-red-100 text-red-800' : 
                      log.severity === 'Medium' ? 'bg-orange-100 text-orange-800' : 
                      'bg-slate-100 text-slate-800'
                    }>
                      {log.severity}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

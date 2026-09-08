"use client";

import { useEffect, useState } from "react";
import { useProfile } from "@/lib/useProfile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Save, CheckCircle } from "lucide-react";

export default function BidderProfilePage() {
  const { profile, setProfile, isLoaded } = useProfile();
  const [formData, setFormData] = useState(profile);
  const [isSaved, setIsSaved] = useState(false);

  // Sync state once localStorage is loaded
  useEffect(() => {
    if (isLoaded) {
      setFormData(profile);
    }
  }, [profile, isLoaded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  if (!isLoaded) return <div className="p-8 text-center text-slate-500">Loading profile...</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">Company Profile</h2>
        <p className="text-slate-500">Save your statutory data here to automatically pre-fill future bid applications.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Business Information</CardTitle>
          <CardDescription>Enter your verified statutory details. This data is saved locally for this prototype.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSave}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Legal Company Name</Label>
                <Input 
                  id="companyName" 
                  name="companyName" 
                  value={formData.companyName} 
                  onChange={handleChange} 
                  placeholder="e.g. TechCorp India Pvt Ltd" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Registered Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="name@company.com" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gstn">GSTIN (GST Number)</Label>
                <Input 
                  id="gstn" 
                  name="gstn" 
                  value={formData.gstn} 
                  onChange={handleChange} 
                  placeholder="e.g. 22AAAAA0000A1Z5" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pan">Permanent Account Number (PAN)</Label>
                <Input 
                  id="pan" 
                  name="pan" 
                  value={formData.pan} 
                  onChange={handleChange} 
                  placeholder="e.g. ABCDE1234F" 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="udyam">Udyam Registration Number</Label>
                <Input 
                  id="udyam" 
                  name="udyam" 
                  value={formData.udyam} 
                  onChange={handleChange} 
                  placeholder="e.g. UDYAM-MH-00-0000000" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="turnover">Latest Annual Turnover (₹)</Label>
                <Input 
                  id="turnover" 
                  name="turnover" 
                  value={formData.turnover} 
                  onChange={handleChange} 
                  placeholder="e.g. 50,000,000" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Registered Business Address</Label>
              <Input 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                placeholder="Full address..." 
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t p-6 bg-slate-50">
            {isSaved ? (
              <span className="text-teal-600 font-medium flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" /> Data saved securely!
              </span>
            ) : (
              <span className="text-slate-500 text-sm">Data is saved locally in your browser.</span>
            )}
            <Button type="submit" className="bg-slate-800 hover:bg-slate-900">
              <Save className="h-4 w-4 mr-2" /> Save Profile
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'bidder' | 'officer'>('bidder');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (role === 'officer') {
      router.push('/officer/dashboard');
    } else {
      router.push('/bidder/profile'); // Redirect to profile to save data
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md shadow-lg border-t-4 border-t-orange-600">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-slate-800">GeM Verify</CardTitle>
          <CardDescription>Sign in to access the procurement portal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div 
              className={`border rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer transition-colors ${role === 'bidder' ? 'bg-orange-50 border-orange-500' : 'bg-white hover:bg-slate-50'}`}
              onClick={() => setRole('bidder')}
            >
              <User className={`h-6 w-6 mb-2 ${role === 'bidder' ? 'text-orange-600' : 'text-slate-400'}`} />
              <span className={`text-sm font-medium ${role === 'bidder' ? 'text-orange-700' : 'text-slate-500'}`}>Bidder / MSME</span>
            </div>
            <div 
              className={`border rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer transition-colors ${role === 'officer' ? 'bg-orange-50 border-orange-500' : 'bg-white hover:bg-slate-50'}`}
              onClick={() => setRole('officer')}
            >
              <ShieldCheck className={`h-6 w-6 mb-2 ${role === 'officer' ? 'text-orange-600' : 'text-slate-400'}`} />
              <span className={`text-sm font-medium ${role === 'officer' ? 'text-orange-700' : 'text-slate-500'}`}>Procurement Officer</span>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="name@company.com" required defaultValue={role === 'officer' ? 'officer@gov.in' : ''} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs text-orange-600 hover:underline">Forgot password?</a>
              </div>
              <Input id="password" type="password" required defaultValue="password123" />
            </div>
            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 h-11 text-base">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t p-4 bg-slate-50 rounded-b-lg">
          <p className="text-xs text-slate-500 text-center">
            By signing in, you agree to the GeM Verify Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

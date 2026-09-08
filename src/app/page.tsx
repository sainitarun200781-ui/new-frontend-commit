import Link from 'next/link';
import { ShieldCheck, FileText, Zap, Lock, ChevronRight, Activity, Search } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-cyan-500 flex items-center justify-center shadow-sm shadow-cyan-900/50">
              <ShieldCheck className="h-5 w-5 text-slate-950" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              GeM <span className="text-cyan-400 font-medium">Verify</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/auth/login" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold px-5 py-2 transition-colors flex items-center">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-950 text-white pt-24 pb-32 px-6 border-b-4 border-cyan-500">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
              <Zap className="mr-2 h-3 w-3" />
              Smart India Hackathon 2026
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              Procurement Security, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Automated.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              GeM Verify is an AI-powered integrated bid compliance verification platform. Reduce manual tender review times from days to seconds with advanced document tampering detection and automated statutory checks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/auth/login" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 text-center transition-colors flex items-center justify-center text-lg">
                Access Platform <Lock className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#features" className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold px-8 py-4 text-center transition-colors text-lg">
                Explore Features
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end animate-in fade-in duration-1000 delay-300">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Abstract decorative elements simulating a secure dashboard */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
                <div className="h-10 border-b border-slate-700 bg-slate-900/50 flex items-center px-4 space-x-2">
                  <div className="h-3 w-3 bg-rose-500 rounded-full" />
                  <div className="h-3 w-3 bg-amber-500 rounded-full" />
                  <div className="h-3 w-3 bg-emerald-500 rounded-full" />
                </div>
                <div className="p-8 space-y-6">
                  <div className="h-8 w-3/4 bg-slate-800" />
                  <div className="h-4 w-1/2 bg-slate-800" />
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-24 bg-slate-800 border border-slate-700 p-4 flex flex-col justify-end">
                      <div className="h-2 w-full bg-cyan-500/20"><div className="h-full w-3/4 bg-cyan-500" /></div>
                    </div>
                    <div className="h-24 bg-slate-800 border border-slate-700 p-4 flex flex-col justify-end">
                      <div className="h-2 w-full bg-amber-500/20"><div className="h-full w-1/2 bg-amber-500" /></div>
                    </div>
                  </div>
                  <div className="h-32 w-full bg-slate-800 border border-slate-700" />
                </div>
              </div>
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-cyan-500/50 p-6 shadow-2xl shadow-cyan-900/20 animate-bounce">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-cyan-500/10 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">98.4% Accuracy</div>
                    <div className="text-slate-400 text-sm">AI Tamper Detection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">Enterprise-Grade Verification</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Our platform integrates cutting-edge AI with statutory databases to ensure complete transparency and compliance in government procurement.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group">
            <div className="h-12 w-12 bg-slate-950 flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors">
              <Search className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">AI Document Analysis</h3>
            <p className="text-slate-600 leading-relaxed">
              Proprietary optical character recognition (OCR) and metadata analysis instantly flags forged, edited, or tampered PDF submissions.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group">
            <div className="h-12 w-12 bg-slate-950 flex items-center justify-center mb-6 group-hover:bg-amber-400 transition-colors">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Statutory API Checks</h3>
            <p className="text-slate-600 leading-relaxed">
              Automated cross-verification of bidder data against government databases including GSTN, PAN, and Udyam Registration portals.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 hover:border-rose-400 hover:shadow-xl transition-all duration-300 group">
            <div className="h-12 w-12 bg-slate-950 flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Risk Scoring</h3>
            <p className="text-slate-600 leading-relaxed">
              Machine learning models calculate a comprehensive compliance score, assigning Low, Medium, or High risk tags to every bid.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-500 py-12 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-5 w-5 text-cyan-500" />
            <span className="text-lg font-bold tracking-tight text-white">GeM Verify</span>
          </div>
          <p>© 2026 Smart India Hackathon Prototype. Developed for the Government of India e-Marketplace.</p>
        </div>
      </footer>
    </div>
  );
}

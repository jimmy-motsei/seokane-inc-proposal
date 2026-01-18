"use client";

import { useState } from "react";
import Image from "next/image";
import { DiscoverySection } from "@/components/DiscoverySection";
import { ProposalActions } from "@/components/ProposalActions";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertTriangle,
  Target,
  TrendingUp,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Code2,
  Palette,
  Database
} from "lucide-react";

export default function ProposalPage() {
  const [answers, setAnswers] = useState({
    businessGrowth: "",
    targetMarket: "",
    budgetResources: "",
    internalCapacity: "",
    competitiveLandscape: "",
    currentManagement: "",
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-sm font-medium">Digital Proposal</span>
            </div>
            
            {/* Pill Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-slate-100 rounded-full p-1">
              <a href="#overview" className="px-4 py-2 rounded-full text-sm font-medium text-white bg-slate-900 transition-colors">
                Overview
              </a>
              <a href="#audit" className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-colors">
                Audit
              </a>
              <a href="#solution" className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-colors">
                Solution
              </a>
              <a href="#discovery" className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-colors">
                Discovery
              </a>
            </div>

            {/* Logo Icon */}
            <div className="flex items-center">
              <Image
                src="/seokane-icon.png"
                alt="Seokane Inc."
                width={40}
                height={40}
                className="h-8 w-8 object-contain"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
            <span className="text-[#F58220] text-sm font-medium">Phase 1: Discovery & Alignment</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Digital Transformation
            <br />
            <span className="text-slate-400">Proposal</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            A comprehensive digital strategy to transform your online presence from a static business card 
            into a <span className="text-slate-900 font-medium">high-performance lead generation engine</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#discovery" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all"
            >
              Start Discovery <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#audit" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-all"
            >
              View Technical Audit
            </a>
          </div>
        </div>
      </section>

      {/* Technical Audit Section */}
      <section id="audit" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-red-50 text-red-600 border border-red-200 mb-4">
              Technical Snapshot
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Current State <span className="text-slate-400">Analysis</span>
            </h2>
          </div>

          {/* Dark Card for Technical Snapshot */}
          <div className="dark-card p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Technical Snapshot</h3>
                <p className="text-slate-300 leading-relaxed">
                  The current Seokane Inc. website is a <span className="text-orange-400 font-medium">static HTML legacy site (circa 2016)</span>. 
                  While functionally stable, it acts as a &quot;digital business card&quot; rather than a lead generation engine. 
                  It lacks modern SEO structures (Schema markup), has rigid mobile responsiveness, and relies on 
                  generic meta-tags that hurt local search visibility (e.g., &quot;Commercial Attorney Johannesburg&quot;).
                </p>
              </div>
            </div>
          </div>

          {/* Critical Gaps */}
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Critical Gaps Identified</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="light-card border border-slate-200 overflow-hidden hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Conversion Void</h4>
                    <p className="text-slate-600 text-sm">
                      No clear Call-to-Actions (CTAs) or lead magnets to capture visitor intent.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="light-card border border-slate-200 overflow-hidden hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Authority Deficit</h4>
                    <p className="text-slate-600 text-sm">
                      Lack of dynamic content (case studies, white papers) to prove &quot;technical excellence&quot;.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="light-card border border-slate-200 overflow-hidden hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Trust Signals</h4>
                    <p className="text-slate-600 text-sm">
                      Dated aesthetic and 2016 copyright footer subconsciously lower brand credibility.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="light-card border border-slate-200 overflow-hidden hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Single-Channel Comms</h4>
                    <p className="text-slate-600 text-sm">
                      Reliance on basic contact forms without CRM integration (HubSpot).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proposed Solution Section */}
      <section id="solution" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-orange-50 text-[#F58220] border border-orange-200 mb-4">
              The Proposed Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Next-Generation <span className="text-slate-400">Marketing Engine</span>
            </h2>
          </div>

          {/* Dark Card for Solution */}
          <div className="dark-card p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Our Recommendation</h3>
                <p className="text-slate-300 leading-relaxed">
                  We will migrate to a <span className="text-orange-400 font-medium">Next.js (App Router) architecture</span> for 
                  instant page loads and superior SEO. We will integrate <span className="text-orange-400 font-medium">Sanity.io</span> for 
                  easy content management and <span className="text-orange-400 font-medium">HubSpot</span> for lead tracking, 
                  wrapping it all in a premium Tailwind CSS design system that reflects legal precision.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="light-card border border-slate-200 overflow-hidden hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-7 h-7 text-slate-700" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Next.js 14+</h4>
                <p className="text-slate-600 text-sm">
                  App Router for instant navigation, SEO excellence, and server-side rendering.
                </p>
              </CardContent>
            </Card>

            <Card className="light-card border border-slate-200 overflow-hidden hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-7 h-7 text-slate-700" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Tailwind CSS</h4>
                <p className="text-slate-600 text-sm">
                  Premium design system with clean aesthetics, smooth animations, and mobile-first.
                </p>
              </CardContent>
            </Card>

            <Card className="light-card border border-slate-200 overflow-hidden hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-7 h-7 text-slate-700" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">HubSpot CRM</h4>
                <p className="text-slate-600 text-sm">
                  Lead tracking, email automation, and analytics for data-driven decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <DiscoverySection answers={answers} onAnswersChange={setAnswers} />

      {/* Proposal Actions */}
      <ProposalActions
        proposalData={{
          clientName: "Seokane Inc. Attorneys",
          answers,
          submittedAt: new Date().toLocaleString("en-ZA", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        }}
      />

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Proposal prepared by{" "}
            <a href="https://maruonline.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">
              Maru Online
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { TrendingUp, Users, DollarSign, Building2, Target, Settings } from "lucide-react";

interface DiscoveryAnswers {
  businessGrowth: string;
  targetMarket: string;
  budgetResources: string;
  internalCapacity: string;
  competitiveLandscape: string;
  currentManagement: string;
}

interface DiscoverySectionProps {
  answers: DiscoveryAnswers;
  onAnswersChange: (answers: DiscoveryAnswers) => void;
}

const discoveryQuestions = [
  {
    id: "businessGrowth",
    icon: TrendingUp,
    title: "Business Growth",
    question: "Which services are key growth areas? What is the estimated % growth desired?",
    placeholder: "e.g., Commercial law services are our primary focus. We aim for 25% growth in corporate clients over the next 12 months...",
  },
  {
    id: "targetMarket",
    icon: Users,
    title: "Target Market",
    question: "Who is the ideal client (B2B/B2C)? What is the geographic focus and typical client journey?",
    placeholder: "e.g., B2B focus - SMEs and corporations in Gauteng. Clients typically find us through referrals or Google search...",
  },
  {
    id: "budgetResources",
    icon: DollarSign,
    title: "Budget & Resources",
    question: "Monthly budget for digital marketing and software tools?",
    placeholder: "e.g., R15,000 - R25,000 monthly for marketing. Open to investing in CRM and automation tools...",
  },
  {
    id: "internalCapacity",
    icon: Building2,
    title: "Internal Capacity",
    question: "Availability of internal staff for content creation vs. outsourcing?",
    placeholder: "e.g., We have a marketing coordinator who can review content, but prefer outsourcing content creation...",
  },
  {
    id: "competitiveLandscape",
    icon: Target,
    title: "Competitive Landscape",
    question: "Main competitors and Unique Value Proposition (UVP)?",
    placeholder: "e.g., Main competitors include XYZ Attorneys and ABC Law. Our UVP is our 15+ years of specialized commercial expertise...",
  },
  {
    id: "currentManagement",
    icon: Settings,
    title: "Current Management",
    question: "How is the site currently updated and what are the main frustrations?",
    placeholder: "e.g., Updates require contacting a developer which takes weeks. Main frustration is inability to quickly publish news...",
  },
];

export function DiscoverySection({ answers, onAnswersChange }: DiscoverySectionProps) {
  const handleChange = (id: keyof DiscoveryAnswers, value: string) => {
    onAnswersChange({
      ...answers,
      [id]: value,
    });
  };

  return (
    <section id="discovery" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#F58220]/10 text-[#F58220] border border-[#F58220]/20 mb-4">
            Discovery Phase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Help Us Understand <span className="gradient-text">Your Goals</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Please answer the following questions to help us tailor the proposal to your specific needs. 
            Your responses will be included in the final proposal document.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4" defaultValue="businessGrowth">
          {discoveryQuestions.map((item) => {
            const Icon = item.icon;
            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="glass-card rounded-xl border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#F58220]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-white/50 mt-0.5">{item.question}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <Textarea
                    value={answers[item.id as keyof DiscoveryAnswers]}
                    onChange={(e) => handleChange(item.id as keyof DiscoveryAnswers, e.target.value)}
                    placeholder={item.placeholder}
                    className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#F58220]/50 focus:ring-[#F58220]/20 resize-none"
                  />
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

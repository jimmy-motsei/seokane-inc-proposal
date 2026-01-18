"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle, FileText } from "lucide-react";
import { sendProposal, type ProposalData } from "@/app/actions/sendProposal";

interface ProposalActionsProps {
  proposalData: ProposalData;
}

export function ProposalActions({ proposalData }: ProposalActionsProps) {
  const [status, setStatus] = useState<"idle" | "generating" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleGenerateAndSend = async () => {
    setStatus("generating");
    setErrorMessage("");

    try {
      // Small delay to show generating state
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setStatus("sending");
      
      const result = await sendProposal(proposalData);

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send proposal");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
      console.error("Proposal submission error:", error);
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case "generating":
        return (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Generating Proposal...
          </>
        );
      case "sending":
        return (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending to Agency...
          </>
        );
      case "success":
        return (
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            Proposal Sent Successfully!
          </>
        );
      case "error":
        return (
          <>
            <Send className="w-5 h-5 mr-2" />
            Try Again
          </>
        );
      default:
        return (
          <>
            <Send className="w-5 h-5 mr-2" />
            Generate & Send Proposal
          </>
        );
    }
  };

  return (
    <section id="actions" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="w-16 h-16 rounded-full bg-[#F58220]/10 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-[#F58220]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Submit Your Discovery?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Once you've answered the discovery questions above, click the button below to generate 
            your personalized proposal and send it to our team for review.
          </p>

          <Button
            onClick={handleGenerateAndSend}
            disabled={status === "generating" || status === "sending" || status === "success"}
            size="lg"
            className={`
              px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300
              ${status === "success" 
                ? "bg-green-600 hover:bg-green-700" 
                : status === "error"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-[#F58220] hover:bg-[#F58220]/90 orange-glow"
              }
            `}
          >
            {getButtonContent()}
          </Button>

          {status === "success" && (
            <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-green-400 font-medium">
                🎉 Proposal sent! We will be in touch shortly.
              </p>
            </div>
          )}

          {status === "error" && errorMessage && (
            <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <p className="text-red-400 font-medium">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

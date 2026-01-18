"use server";

export interface ProposalData {
  clientName: string;
  answers: {
    businessGrowth: string;
    targetMarket: string;
    budgetResources: string;
    internalCapacity: string;
    competitiveLandscape: string;
    currentManagement: string;
  };
  submittedAt: string;
}

export interface SendProposalResult {
  success: boolean;
  error?: string;
}

export async function sendProposal(data: ProposalData): Promise<SendProposalResult> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL_TO || "hello@maruonline.com";

  // Validate that at least some answers are provided
  const hasAnswers = Object.values(data.answers).some((answer) => answer.trim().length > 0);
  
  if (!hasAnswers) {
    return {
      success: false,
      error: "Please answer at least one discovery question before submitting.",
    };
  }

  // Format the email content
  const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; }
    .header { background: #000133; color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; color: #F58220; }
    .content { padding: 30px; background: #f9fafb; }
    .section { background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #F58220; }
    .section h3 { margin-top: 0; color: #000133; }
    .section p { margin-bottom: 0; color: #4b5563; }
    .footer { padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
    .badge { display: inline-block; background: #F58220; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="header">
    <span class="badge">New Proposal Discovery</span>
    <h1>Seokane Inc. Attorneys</h1>
    <p style="margin: 10px 0 0; opacity: 0.8;">Digital Transformation Proposal Response</p>
  </div>
  
  <div class="content">
    <p><strong>Submitted:</strong> ${data.submittedAt}</p>
    <p><strong>Client:</strong> ${data.clientName}</p>
    
    <h2 style="color: #000133; border-bottom: 2px solid #F58220; padding-bottom: 10px;">Discovery Responses</h2>
    
    ${data.answers.businessGrowth ? `
    <div class="section">
      <h3>📈 Business Growth</h3>
      <p>${data.answers.businessGrowth}</p>
    </div>
    ` : ''}
    
    ${data.answers.targetMarket ? `
    <div class="section">
      <h3>👥 Target Market</h3>
      <p>${data.answers.targetMarket}</p>
    </div>
    ` : ''}
    
    ${data.answers.budgetResources ? `
    <div class="section">
      <h3>💰 Budget & Resources</h3>
      <p>${data.answers.budgetResources}</p>
    </div>
    ` : ''}
    
    ${data.answers.internalCapacity ? `
    <div class="section">
      <h3>🏢 Internal Capacity</h3>
      <p>${data.answers.internalCapacity}</p>
    </div>
    ` : ''}
    
    ${data.answers.competitiveLandscape ? `
    <div class="section">
      <h3>🎯 Competitive Landscape</h3>
      <p>${data.answers.competitiveLandscape}</p>
    </div>
    ` : ''}
    
    ${data.answers.currentManagement ? `
    <div class="section">
      <h3>⚙️ Current Management</h3>
      <p>${data.answers.currentManagement}</p>
    </div>
    ` : ''}
  </div>
  
  <div class="footer">
    <p>This discovery response was submitted via the Seokane Inc. Proposal Generator.</p>
    <p>© ${new Date().getFullYear()} Maru Online</p>
  </div>
</body>
</html>
`;

  // If Resend API key is not configured, log the email and return success for demo purposes
  if (!RESEND_API_KEY) {
    console.log("=".repeat(60));
    console.log("DEMO MODE: Email would be sent to:", ADMIN_EMAIL);
    console.log("Subject: New Proposal Discovery: Seokane Inc.");
    console.log("=".repeat(60));
    console.log("Discovery Answers:", JSON.stringify(data.answers, null, 2));
    console.log("=".repeat(60));
    
    // In demo mode, we still return success so the UI shows properly
    return { success: true };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Seokane Proposal <noreply@maruonline.com>",
        to: [ADMIN_EMAIL],
        subject: "New Proposal Discovery: Seokane Inc.",
        html: emailContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API Error:", errorData);
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      error: "Network error. Please check your connection and try again.",
    };
  }
}

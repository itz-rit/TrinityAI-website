import type { Metadata } from "next";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";

export const metadata: Metadata = {
  title: "Terms & Conditions | TrinityAI",
  description: "Terms and Conditions for the TrinityAI website.",
};

const sections = [
  {
    title: "Introduction and Acceptance",
    content: [
      "These Terms & Conditions govern your use of the TrinityAI website. By using the website, you agree to use it lawfully and in accordance with these terms. If you do not agree, please do not use the website.",
    ],
  },
  {
    title: "Website Use",
    content: [
      "You may browse and use this website for legitimate business and informational purposes. You must not misuse the website, interfere with its operation, attempt unauthorized access, or use its content in a way that violates applicable law.",
    ],
  },
  {
    title: "Services and Enquiries",
    content: [
      "Information about TrinityAI's services is provided for general information. An enquiry or contact message helps us understand your requirements, but submitting one does not automatically create a binding service contract or guarantee that a project will be accepted.",
    ],
  },
  {
    title: "Quotes and Proposals",
    content: [
      "Any scope, pricing, timing, deliverables, or other project terms will be set out separately where applicable in an agreed quotation, proposal, contract, statement of work, or other written agreement between the parties.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "The website and its content, including text, graphics, branding, and visual materials, belong to TrinityAI or are used with permission unless stated otherwise. You may not reproduce, modify, distribute, or commercially use website content without appropriate permission.",
    ],
  },
  {
    title: "User Responsibilities",
    content: [
      "You are responsible for ensuring that information you submit is accurate, lawful, and does not infringe another person's rights. Do not submit confidential or sensitive information unless it is necessary for your enquiry and appropriate to share.",
    ],
  },
  {
    title: "Third-Party Services and Links",
    content: [
      "The website may use or link to third-party services and websites. TrinityAI does not control those third parties and is not responsible for their content, availability, or terms. Your use of them may be subject to their own policies.",
    ],
  },
  {
    title: "Disclaimers",
    content: [
      "The website is provided for general information and is made available on an as-is basis. We do not promise that every page will always be complete, current, uninterrupted, or free of errors. Specific services and project outcomes are governed by their applicable written agreement.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the extent permitted by applicable law, TrinityAI will not be responsible for indirect, incidental, or consequential loss arising from your use of, or inability to use, this website. Nothing in these terms excludes liability that cannot lawfully be excluded.",
    ],
  },
  {
    title: "Changes to These Terms",
    content: [
      "We may update these Terms & Conditions from time to time. Changes will be posted on this page with a revised date. Continued use of the website after an update means that you accept the updated terms.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These terms are governed by the laws applicable in the jurisdiction where TrinityAI operates, without limiting any mandatory rights or protections that may apply to you.",
    ],
  },
  {
    title: "Contact Information",
    content: [
      "For questions about these terms, contact TrinityAI at trinitydatas011@gmail.com or 70927 40086.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip noise-overlay">
      <Navigation />
      <article className="relative mx-auto max-w-[1000px] px-6 pb-24 pt-36 text-foreground lg:px-12 lg:pb-32 lg:pt-48">
        <header className="border-b border-foreground/10 pb-12 lg:pb-16">
          <span className="mb-6 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            Legal
          </span>
          <h1 className="max-w-4xl font-display text-5xl leading-none tracking-tight sm:text-6xl lg:text-8xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-8 text-sm text-muted-foreground">Last updated: September 25, 2026</p>
        </header>

        <div className="divide-y divide-foreground/10">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-6 py-10 md:grid-cols-[minmax(180px,0.7fr)_minmax(0,1.5fr)] lg:py-12">
              <h2 className="font-display text-3xl leading-tight tracking-tight lg:text-4xl">{section.title}</h2>
              <div className="space-y-5 text-base leading-8 text-muted-foreground lg:text-lg">
                {section.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
      </article>
      <FooterSection />
    </main>
  );
}

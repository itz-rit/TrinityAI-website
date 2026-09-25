import type { Metadata } from "next";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy | TrinityAI",
  description: "Privacy Policy for the TrinityAI website.",
};

const sections = [
  {
    title: "Introduction",
    content: [
      "This Privacy Policy explains how TrinityAI handles information shared through this website and related enquiries. We aim to collect and use information only for clear business purposes and to communicate with people who contact us.",
    ],
  },
  {
    title: "Information We Collect",
    content: [
      "Depending on how you contact us, we may receive your name, email address, phone number, company or business information, and the details you include in an enquiry or message.",
      "The website may also provide basic usage information through the analytics service configured on the site. We do not currently identify any contact or enquiry form, Meta Pixel, Google Analytics, or CRM integration in this website implementation.",
    ],
  },
  {
    title: "How We Use Information",
    content: [
      "We may use information to respond to enquiries, contact potential customers, provide information or quotations about our services, and understand the requirements described in a message.",
      "We may also use information for operating, securing, maintaining, and improving the website and for business communications or marketing where applicable and permitted.",
    ],
  },
  {
    title: "How Information Is Shared",
    content: [
      "We may share information with service providers where this is needed to operate the website or respond to an enquiry. The website also includes Vercel Analytics for website usage measurement.",
      "Information may be disclosed when required by applicable law, legal process, or a valid request from a competent authority. We do not sell personal information.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We take reasonable practical steps to protect information against unauthorized access, misuse, alteration, or loss. No method of transmission or storage can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain information only for as long as reasonably necessary for the purpose for which it was received, to manage an ongoing business relationship, or to meet applicable legal and operational requirements.",
    ],
  },
  {
    title: "User Rights and Requests",
    content: [
      "You may contact us to ask what personal information we hold about you, request a correction, or ask us to stop using information for a particular communication. We may need to verify a request before acting on it.",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    content: [
      "This website does not currently identify a dedicated cookie-consent system, Meta Pixel, Google Analytics, or other advertising pixel in its implementation. The site includes Vercel Analytics, which may process basic website usage information as part of that service. Browser or platform technologies may also be used by hosting or website infrastructure providers as necessary to operate the site.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "The website may link to third-party websites, including TrinityAI's external website and social profiles. Their privacy practices are controlled by those third parties, so please review their policies before sharing information with them.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy when the website, services, or applicable requirements change. The updated version will be posted on this page with a revised date.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "For privacy questions or requests, contact TrinityAI at trinitydatas011@gmail.com or 70927 40086. You may also write to us through the contact details published on this website.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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

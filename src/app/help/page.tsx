"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { useState } from "react";

const faqs = [
  {
    question: "What is Marqly?",
    answer: "Marqly is a modern bookmark manager that helps you save, organize, and access your favorite web pages from anywhere. It features smart collections, text highlights, and seamless browser integration."
  },
  {
    question: "How do I get started?",
    answer: "Simply sign up for a free account at app.marqly.com, install our browser extension, and start saving bookmarks with a single click. Your bookmarks sync automatically across all your devices."
  },
  {
    question: "Is Marqly free to use?",
    answer: "Yes! Marqly offers a generous free plan with up to 100 bookmarks and 3 collections. For power users, our Pro plan offers unlimited bookmarks, collections, and premium features."
  },
  {
    question: "Which browsers are supported?",
    answer: "Currently, we support Chrome with extensions for Firefox, Safari, and Edge coming soon. You can also access Marqly from any browser through our web app."
  },
  {
    question: "Can I import my existing bookmarks?",
    answer: "Absolutely! Marqly supports importing bookmarks from all major browsers including Chrome, Firefox, Safari, and Edge. Just go to Settings > Import to get started."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, your data security is our priority. All data is encrypted in transit and at rest. We never share your personal information or bookmarks with third parties."
  },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-[88px]">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-[800px]">
            <div className="text-center mb-16">
              <h1 className="text-[56px] font-[800] leading-[1.1] tracking-[-0.02em] text-black mb-6">
                Help Center
              </h1>
              <p className="text-[20px] text-[#666666]">
                Find answers to common questions about Marqly
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[16px] border border-[#E5E7EB] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F9FAFB] transition-colors"
                  >
                    <span className="text-[18px] font-semibold text-black">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-[#666666] transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <p className="text-[16px] text-[#666666] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 bg-[#F0F7FF] rounded-[32px] p-12 text-center">
              <h2 className="text-[28px] font-bold text-black mb-4">
                Still have questions?
              </h2>
              <p className="text-[18px] text-[#666666] mb-8">
                We are here to help. Reach out to our support team.
              </p>
              <a
                href="mailto:support@marqly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#30A2FF] text-white font-semibold hover:bg-[#2587E0] transition-colors"
              >
                Contact Support
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
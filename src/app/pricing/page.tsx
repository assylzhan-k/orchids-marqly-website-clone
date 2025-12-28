"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-[88px]">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-[1200px]">
            <div className="text-center mb-16">
              <h1 className="text-[56px] font-[800] leading-[1.1] tracking-[-0.02em] text-black mb-6">
                Simple, transparent pricing
              </h1>
              <p className="text-[20px] text-[#666666] max-w-[600px] mx-auto">
                Choose the plan that works best for you. Start free and upgrade as you grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
              <div className="bg-white rounded-[32px] border border-[#E5E7EB] p-10 flex flex-col">
                <div className="mb-8">
                  <h3 className="text-[24px] font-bold text-black mb-2">Free</h3>
                  <p className="text-[#666666]">Perfect for getting started</p>
                </div>
                <div className="mb-8">
                  <span className="text-[48px] font-[800] text-black">$0</span>
                  <span className="text-[#666666]">/month</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-[#333333]">
                    <svg className="w-5 h-5 text-[#30A2FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 100 bookmarks
                  </li>
                  <li className="flex items-center gap-3 text-[#333333]">
                    <svg className="w-5 h-5 text-[#30A2FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    3 collections
                  </li>
                  <li className="flex items-center gap-3 text-[#333333]">
                    <svg className="w-5 h-5 text-[#30A2FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Browser extension
                  </li>
                  <li className="flex items-center gap-3 text-[#333333]">
                    <svg className="w-5 h-5 text-[#30A2FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mobile access
                  </li>
                </ul>
                <a
                  href="https://app.marqly.com"
                  className="w-full py-4 rounded-full border border-[#E5E7EB] text-black font-semibold text-center hover:bg-[#F9FAFB] transition-colors"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-[#F0F7FF] rounded-[32px] border-2 border-[#30A2FF] p-10 flex flex-col relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#30A2FF] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="mb-8">
                  <h3 className="text-[24px] font-bold text-black mb-2">Pro</h3>
                  <p className="text-[#666666]">For power users</p>
                </div>
                <div className="mb-8">
                  <span className="text-[48px] font-[800] text-black">$9</span>
                  <span className="text-[#666666]">/month</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-[#333333]">
                    <svg className="w-5 h-5 text-[#30A2FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited bookmarks
                  </li>
                  <li className="flex items-center gap-3 text-[#333333]">
                    <svg className="w-5 h-5 text-[#30A2FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited collections
                  </li>
                  <li className="flex items-center gap-3 text-[#333333]">
                    <svg className="w-5 h-5 text-[#30A2FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Text highlights
                  </li>
                  <li className="flex items-center gap-3 text-[#333333]">
                    <svg className="w-5 h-5 text-[#30A2FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom icons & themes
                  </li>
                  <li className="flex items-center gap-3 text-[#333333]">
                    <svg className="w-5 h-5 text-[#30A2FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority support
                  </li>
                </ul>
                <a
                  href="https://app.marqly.com"
                  className="w-full py-4 rounded-full bg-[#30A2FF] text-white font-semibold text-center hover:bg-[#2587E0] transition-colors shadow-lg shadow-blue-200"
                >
                  Upgrade to Pro
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
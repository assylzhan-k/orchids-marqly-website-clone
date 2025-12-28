"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function ExtensionPage() {
  const browsers = [
    { name: "Chrome", icon: "🌐", status: "Available", link: "https://chrome.google.com/webstore/detail/marqly" },
    { name: "Firefox", icon: "🦊", status: "Coming Soon", link: "#" },
    { name: "Safari", icon: "🧭", status: "Coming Soon", link: "#" },
    { name: "Edge", icon: "🔷", status: "Coming Soon", link: "#" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-[88px]">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-[1200px]">
            <div className="text-center mb-16">
              <div className="mb-8 flex justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/CRYdEsbP8f95pFTmjg4v89xo09M-13.png"
                  alt="Browser Extensions"
                  width={280}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h1 className="text-[56px] font-[800] leading-[1.1] tracking-[-0.02em] text-black mb-6">
                Browser Extensions
              </h1>
              <p className="text-[20px] text-[#666666] max-w-[600px] mx-auto">
                Save bookmarks instantly from any webpage. Our extensions integrate seamlessly with your favorite browsers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1000px] mx-auto">
              {browsers.map((browser) => (
                <div
                  key={browser.name}
                  className="bg-white rounded-[24px] border border-[#E5E7EB] p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-[48px] mb-4">{browser.icon}</div>
                  <h3 className="text-[20px] font-bold text-black mb-2">{browser.name}</h3>
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                      browser.status === "Available"
                        ? "bg-[#E6F9EF] text-[#10B981]"
                        : "bg-[#F3F4F6] text-[#666666]"
                    }`}
                  >
                    {browser.status}
                  </span>
                  {browser.status === "Available" && (
                    <a
                      href={browser.link}
                      className="mt-6 block w-full py-3 rounded-full bg-[#30A2FF] text-white font-semibold hover:bg-[#2587E0] transition-colors"
                    >
                      Install
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-20 bg-[#F0F7FF] rounded-[32px] p-12 text-center">
              <h2 className="text-[32px] font-bold text-black mb-4">
                One-Click Bookmarking
              </h2>
              <p className="text-[18px] text-[#666666] max-w-[500px] mx-auto mb-8">
                Save any page with a single click. Organize instantly with smart folders and tags.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://chrome.google.com/webstore/detail/marqly"
                  className="px-8 py-4 rounded-full bg-[#30A2FF] text-white font-semibold hover:bg-[#2587E0] transition-colors"
                >
                  Get Chrome Extension
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
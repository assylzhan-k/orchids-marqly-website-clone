"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Beyond Browser Bookmarks: Why a Dedicated Manager Like Marqly is Your Productivity Secret Weapon",
    date: "Apr 13, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/tpET11TER3W7hcbflBWuHhy5AUU-1.png",
    categories: ["Basics", "Pro Tips"],
    slug: "beyond-browser-bookmarks"
  },
  {
    id: 2,
    title: "How to Manage Your Internet Info Like a Pro in 2025",
    date: "Apr 13, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/DfYGjSmPYoDciQsZumxqh3vWok-2.png",
    categories: ["Basics", "Pro Tips"],
    slug: "manage-internet-info-2025"
  },
  {
    id: 3,
    title: "How to Manage Bookmarks Efficiently: A Step-by-Step Guide",
    date: "Apr 13, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/x4KbEzY0tScD7DFMcGDVfpjYrIg-3.jpg",
    categories: ["Basics", "Pro Tips"],
    slug: "manage-bookmarks-efficiently"
  },
  {
    id: 4,
    title: "Why Marqly is the Best Bookmark Manager for 2025",
    date: "Apr 13, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/crmZQR872axTSgHpxtUrfsZjl1Y-4.jpg",
    categories: ["Basics"],
    slug: "best-bookmark-manager-2025"
  },
  {
    id: 5,
    title: "Top 5 Bookmark Managers in 2025",
    date: "Dec 14, 2024",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/taM6b9A4Ts2lnBZkUFBG6cZmk-5.webp",
    categories: ["Pro Tips"],
    slug: "top-5-bookmark-managers-2025"
  }
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-[88px]">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-[1200px]">
            <div className="mb-14">
              <h1 className="text-[56px] font-[800] leading-[1.1] tracking-[-0.02em] text-black">
                Blog
              </h1>
            </div>

            <div className="flex flex-col gap-10">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="blog-card group flex flex-col md:flex-row gap-8 items-start hover:scale-[1.01] transition-transform duration-200"
                >
                  <div className="w-full md:w-[360px] lg:w-[400px] shrink-0">
                    <div className="blog-image relative aspect-[1.6] w-full rounded-[16px] overflow-hidden border border-[#E5E7EB]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px, 400px"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow py-2">
                    <div className="mb-4">
                      <h2 className="text-[24px] font-[700] leading-[1.3] text-black group-hover:text-[#30A2FF] transition-colors duration-200">
                        {post.title}
                      </h2>
                      <p className="post-date mt-2 text-[14px] font-[400] text-[#666666]">
                        {post.date}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category) => (
                        <span
                          key={category}
                          className="tag px-[12px] py-[4px] bg-[#f0f7ff] text-[#30A2FF] text-[12px] font-[600] rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
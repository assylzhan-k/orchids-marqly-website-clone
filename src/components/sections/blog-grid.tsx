import React from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  categories: string[];
  slug: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Beyond Browser Bookmarks: Why a Dedicated Manager Like Marqly is Your Productivity Secret Weapon",
    date: "Apr 13, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/tpET11TER3W7hcbflBWuHhy5AUU-1.png",
    categories: ["Basics", "Pro Tips"],
    slug: "beyond-browser-bookmarks-why-a-dedicated-manager-like-marqly-is-your-productivity-secret-weapon"
  },
  {
    id: 2,
    title: "How to Manage Your Internet Info Like a Pro in 2025",
    date: "Apr 13, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/DfYGjSmPYoDciQsZumxqh3vWok-2.png",
    categories: ["Basics", "Pro Tips"],
    slug: "how-to-manage-your-internet-info-like-a-pro-in-2025"
  },
  {
    id: 3,
    title: "How to Manage Bookmarks Efficiently: A Step-by-Step Guide",
    date: "Apr 13, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/x4KbEzY0tScD7DFMcGDVfpjYrIg-3.jpg",
    categories: ["Basics", "Pro Tips"],
    slug: "how-to-manage-bookmarks-efficiently-a-step-by-step-guide"
  },
  {
    id: 4,
    title: "Why Marqly is the Best Bookmark Manager for 2025",
    date: "Apr 13, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/crmZQR872axTSgHpxtUrfsZjl1Y-4.jpg",
    categories: ["Basics"],
    slug: "why-marqly-is-the-best-bookmark-manager-for-2025"
  },
  {
    id: 5,
    title: "Top 5 Bookmark Managers in 2025",
    date: "Dec 14, 2024",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/taM6b9A4Ts2lnBZkUFBG6cZmk-5.webp",
    categories: ["Pro Tips"],
    slug: "top-5-bookmark-managers-in-2025"
  }
];

const BlogGrid: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-14">
          <h1 className="text-[56px] font-[800] leading-[1.1] tracking-[-0.02em] text-[#000000]">
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
                <div className="blog-image relative aspect-[1.6] w-full rounded-[16px] overflow-hidden border border-[#EBEEF0]">
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
                  <h6 className="text-[24px] font-[700] leading-[1.3] text-[#000000] group-hover:text-[#1da1f2] transition-colors duration-200">
                    {post.title}
                  </h6>
                  <p className="post-date mt-2 text-[14px] font-[400] text-[#657786]">
                    {post.date}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="tag px-[12px] py-[4px] bg-[#f0f7ff] text-[#1da1f2] text-[12px] font-[600] rounded-full"
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
  );
};

export default BlogGrid;
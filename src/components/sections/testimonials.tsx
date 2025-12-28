import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    text: "Fantastic way to organize bookmarks. Highly recommended!",
    author: "Adrian",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/HdxMAOjEJY0eVOjFiSGiXFoi5vA-8.png",
  },
  {
    text: "Great bookmarking tool with a user friendly interface , Absolutely a great way to save your bookmarks",
    author: "Chenten",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/QN0uDRAZHZ9OUKufDBNiN6DlP4w-9.png",
  },
  {
    text: "I love the simplicity of Marqly. It allows me to manage all of my bookmarks in a single place.",
    author: "Tina",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/Rc5TvNDrbvc1LvIuCtrkhLh4uoQ-10.png",
  },
  {
    text: "My absolute favourite bookmarking tool. Really the love the UI and easy of use.",
    author: "Michael",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/P3wW5LIoCzcNGuEW8AuF4IamFTE-11.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F1FDF6] py-[100px] px-6 lg:px-0">
      <div className="max-w-[1240px] mx-auto rounded-[48px] overflow-hidden">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-[48px] lg:text-[56px] font-bold text-black tracking-tight mb-4">
            Loved by people.
          </h2>
          <p className="text-[18px] text-[#666666] mb-8">
            What do people think about our product
          </p>
          <a
            href="https://app.marqly.com"
            className="inline-flex items-center bg-[#30A2FF] hover:bg-[#288eda] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 text-[16px] gap-2"
          >
            Sign up now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Testimonial Marquee/Grid */}
        <div className="relative overflow-hidden w-full">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 pb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-[32px] p-8 min-w-[300px] max-w-[400px] flex-1 border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col h-full">
                    <p className="text-[15px] leading-relaxed text-[#666666] mb-4 flex-grow">
                      {testimonial.text}
                    </p>
                    <span className="text-[16px] font-bold text-black">
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
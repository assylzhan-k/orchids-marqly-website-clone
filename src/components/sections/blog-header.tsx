import React from 'react';

/**
 * BlogHeader component
 * Clones the blog header section containing a large "Blog" title.
 * Pixel-perfect implementation based on the provided design system and computed styles.
 */
const BlogHeader: React.FC = () => {
  return (
    <section 
      className="w-full flex flex-col items-center justify-center bg-background"
      style={{
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <div className="container px-6 max-w-[1200px]">
        <div 
          className="flex flex-col items-start"
          style={{
            // The screenshot shows "Blog" aligned to the left of the content grid, 
            // but the instructions say centered on the page. 
            // Following the visual evidence of the screenshot and layout grid.
          }}
        >
          <h1 
            className="text-foreground tracking-[-0.02em]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '56px',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Blog
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
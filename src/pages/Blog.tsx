import CallToAction from "@/components/about/CallToAction";
import SmoothScrolling from "@/components/animation/SmoothScrolling";
import BlogContent from "@/components/blog/BlogContent";
import BlogHero from "@/components/blog/BlogHero";
import ScrollToTop from "@/components/button/ScrollToTop";
import Footer from "@/components/footer/Footer";

const Blog = () => {
  return (
    <SmoothScrolling>
      <ScrollToTop />
      <div>
        <BlogHero />
        <BlogContent />
        <CallToAction />
        <Footer />
      </div>
    </SmoothScrolling>
  );
};

export default Blog;

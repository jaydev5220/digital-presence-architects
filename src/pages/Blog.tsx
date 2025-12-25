import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    title: "The Future of Cloud Computing: Trends to Watch in 2024",
    excerpt: "Explore the emerging trends in cloud technology that are reshaping how businesses operate and innovate in the digital era.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    category: "Cloud",
    author: "Sophia Martinez",
    date: "Dec 20, 2024",
    slug: "future-cloud-computing-2024",
  },
  {
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Learn essential security measures that every small business should implement to protect their digital assets from cyber threats.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    category: "Security",
    author: "Chris Anderson",
    date: "Dec 18, 2024",
    slug: "cybersecurity-small-business",
  },
  {
    title: "How AI is Transforming Customer Service",
    excerpt: "Discover how artificial intelligence is revolutionizing customer support and creating more personalized experiences.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    category: "AI",
    author: "Lisa Wang",
    date: "Dec 15, 2024",
    slug: "ai-transforming-customer-service",
  },
  {
    title: "Building Scalable Mobile Apps: A Developer's Guide",
    excerpt: "A comprehensive guide to creating mobile applications that can handle millions of users without compromising performance.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    category: "Mobile",
    author: "Sarah Kim",
    date: "Dec 12, 2024",
    slug: "scalable-mobile-apps-guide",
  },
  {
    title: "The Rise of No-Code Development Platforms",
    excerpt: "How no-code and low-code platforms are democratizing software development and empowering non-technical users.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    category: "Development",
    author: "Daniel Park",
    date: "Dec 10, 2024",
    slug: "rise-no-code-development",
  },
  {
    title: "DevOps Strategies for Faster Deployment",
    excerpt: "Optimize your development workflow with proven DevOps practices that accelerate time-to-market.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
    category: "DevOps",
    author: "Ryan Foster",
    date: "Dec 8, 2024",
    slug: "devops-faster-deployment",
  },
  {
    title: "UX Design Principles That Drive Conversions",
    excerpt: "Learn the key design principles that create engaging user experiences and improve your conversion rates.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    category: "Design",
    author: "Olivia Johnson",
    date: "Dec 5, 2024",
    slug: "ux-design-conversions",
  },
  {
    title: "Microservices Architecture: When and Why",
    excerpt: "Understanding when microservices make sense for your project and how to implement them effectively.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    category: "Architecture",
    author: "Marcus Johnson",
    date: "Dec 3, 2024",
    slug: "microservices-architecture",
  },
  {
    title: "Digital Transformation Success Stories",
    excerpt: "Real-world examples of businesses that successfully transformed their operations through technology.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Business",
    author: "Alexander Wright",
    date: "Dec 1, 2024",
    slug: "digital-transformation-success",
  },
];

const categories = ["All", "Cloud", "Security", "AI", "Mobile", "Development", "DevOps", "Design", "Architecture", "Business"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-secondary text-primary text-sm font-semibold rounded-full mb-6">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights & Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Stay updated with the latest trends, tips, and insights from our team of experts.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto container-padding">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.slug} {...post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Get the latest insights and updates delivered straight to your inbox. No spam, just valuable content.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="accent" size="lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

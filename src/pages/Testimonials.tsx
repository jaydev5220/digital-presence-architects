import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVentures Inc",
    content: "PalladiumHub transformed our digital infrastructure completely. Their team's expertise and dedication to our project exceeded all expectations. They delivered a robust e-commerce platform that increased our sales by 200%.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateCorp",
    content: "Working with PalladiumHub was a game-changer for our startup. They built a scalable cloud infrastructure that handled our rapid growth from 1,000 to 1 million users seamlessly. Highly professional team!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Director of IT",
    company: "StartupLab",
    content: "Their attention to detail and commitment to quality is unmatched. The mobile app they developed for us received rave reviews and has over 100,000 downloads. Couldn't be happier!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Founder",
    company: "FinTech Solutions",
    content: "PalladiumHub's cybersecurity team helped us achieve compliance with industry standards while implementing robust security measures. Their expertise saved us from potential breaches.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Lisa Wang",
    role: "VP of Engineering",
    company: "HealthTech Pro",
    content: "The AI solution they developed for patient diagnostics has revolutionized our healthcare platform. Their team understood our complex requirements and delivered beyond expectations.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Operations Manager",
    company: "LogiTech Corp",
    content: "Their 24/7 support has been invaluable. Whenever we face an issue, their team responds within minutes. It's like having an in-house IT department without the overhead.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    role: "Marketing Director",
    company: "BrandX Agency",
    content: "The website redesign they delivered helped us increase conversions by 150%. Their design team created a stunning, user-friendly experience that our clients love.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Robert Kim",
    role: "CEO",
    company: "EduTech Learning",
    content: "PalladiumHub built our entire e-learning platform from scratch. It now serves over 50,000 students worldwide and has been recognized as one of the top educational platforms.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Jennifer Adams",
    role: "Product Manager",
    company: "SaaS Solutions",
    content: "Their agile approach and transparent communication made the development process smooth and efficient. We launched our product 2 months ahead of schedule!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    rating: 5,
  },
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "250+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "4.9/5", label: "Average Rating" },
];

const Testimonials = () => {
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
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Don't just take our word for it. Hear from the businesses we've helped transform through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <Quote className="absolute top-8 right-8 w-24 h-24 text-primary/5" />
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-accent fill-accent" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 relative z-10">
              "PalladiumHub has been instrumental in our digital transformation journey. Their team didn't just build us a website – they created a comprehensive digital ecosystem that has transformed how we operate. From the initial consultation to ongoing support, their professionalism and expertise have been exceptional."
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
                alt="John Mitchell"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-bold text-foreground">John Mitchell</h4>
                <p className="text-muted-foreground">CEO, Enterprise Solutions Inc.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Client Stories"
            title="Success Stories From Our Clients"
            description="Real experiences from businesses that partnered with us."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join our growing list of satisfied clients. Let's discuss how we can help your business thrive.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;

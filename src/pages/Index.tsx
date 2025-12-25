import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Lightbulb,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and scalability.",
    color: "purple" as const,
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    color: "orange" as const,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    color: "blue" as const,
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    color: "green" as const,
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description: "Strategic technology consulting to align IT with your business objectives.",
    color: "pink" as const,
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support to keep your systems running smoothly.",
    color: "purple" as const,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVentures Inc",
    content: "PalladiumHub transformed our digital infrastructure. Their team's expertise and dedication exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateCorp",
    content: "Working with PalladiumHub was a game-changer. They delivered a robust solution that scaled with our rapid growth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Director",
    company: "StartupLab",
    content: "Their attention to detail and commitment to quality is unmatched. Highly recommend for any tech project.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
  },
];

const stats = [
  { value: "250+", label: "Projects Completed", icon: Rocket },
  { value: "50+", label: "Happy Clients", icon: Users },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "24/7", label: "Support Available", icon: HeadphonesIcon },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto container-padding relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-2 bg-secondary text-primary text-sm font-semibold rounded-full mb-6">
                Your Trusted Technology Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                We Code Your{" "}
                <span className="gradient-text">Thought</span>{" "}
                Till End
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Transform your business with innovative IT solutions. From web development to cloud infrastructure, we deliver excellence at every step.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/48?img=${i + 10}`}
                      alt="Client"
                      className="w-10 h-10 rounded-full border-2 border-background"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Trusted by 50+ companies</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                  alt="Team collaboration"
                  className="rounded-3xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card p-5 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">250+</p>
                    <p className="text-sm text-muted-foreground">Projects Delivered</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
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
                <stat.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="What We Do"
            title="Comprehensive IT Services"
            description="We offer a full spectrum of IT services designed to help your business thrive in the digital age."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
                alt="Our team at work"
                className="rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-accent">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                badge="About Us"
                title="Your Partner in Digital Excellence"
                align="left"
              />
              <p className="text-muted-foreground mb-6">
                At PalladiumHub, we're more than just an IT company – we're your strategic partner in digital transformation. With over 15 years of experience, we've helped businesses of all sizes harness the power of technology.
              </p>
              <ul className="space-y-4 mb-8">
                {["Expert team of certified professionals", "Agile methodology for faster delivery", "24/7 dedicated support and maintenance", "Custom solutions tailored to your needs"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={20} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it – hear from some of our satisfied clients."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/testimonials">
                View All Testimonials <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-background/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto container-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's discuss how our IT solutions can help you achieve your goals. Get in touch with our team today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project <ArrowRight size={20} />
                </Link>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

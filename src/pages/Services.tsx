import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Lightbulb,
  HeadphonesIcon,
  Database,
  Cpu,
  Globe,
  BarChart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies. From responsive websites to complex enterprise applications, we deliver solutions that drive results.",
    color: "purple" as const,
    features: ["React, Vue, Angular", "Node.js, Python, PHP", "RESTful APIs", "CMS Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android devices.",
    color: "orange" as const,
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services. We help you leverage AWS, Azure, and Google Cloud for optimal performance.",
    color: "blue" as const,
    features: ["Cloud Migration", "AWS, Azure, GCP", "DevOps", "Serverless Architecture"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving threats.",
    color: "green" as const,
    features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Expert database design, optimization, and management services to ensure your data is organized, secure, and accessible.",
    color: "pink" as const,
    features: ["SQL & NoSQL", "Data Migration", "Performance Tuning", "Backup & Recovery"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence and machine learning to automate processes and gain valuable insights.",
    color: "purple" as const,
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots"],
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to increase your online presence, drive traffic, and convert leads.",
    color: "orange" as const,
    features: ["SEO Optimization", "PPC Campaigns", "Social Media", "Content Marketing"],
  },
  {
    icon: BarChart,
    title: "Business Intelligence",
    description: "Transform your data into actionable insights with our advanced analytics and reporting solutions.",
    color: "blue" as const,
    features: ["Data Visualization", "Custom Dashboards", "KPI Tracking", "Report Automation"],
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description: "Strategic technology consulting to align IT initiatives with your business objectives and drive digital transformation.",
    color: "green" as const,
    features: ["Technology Roadmap", "Process Optimization", "Vendor Selection", "IT Strategy"],
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance to keep your systems running smoothly and efficiently.",
    color: "pink" as const,
    features: ["Help Desk", "System Monitoring", "Maintenance", "Issue Resolution"],
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We analyze your business needs, goals, and challenges to understand the scope of your project." },
  { step: "02", title: "Planning", description: "Our team creates a detailed roadmap with timelines, milestones, and resource allocation." },
  { step: "03", title: "Development", description: "Using agile methodology, we build your solution with regular updates and feedback loops." },
  { step: "04", title: "Testing", description: "Rigorous quality assurance ensures your solution is bug-free and performs optimally." },
  { step: "05", title: "Deployment", description: "We handle the seamless deployment and integration of your solution into your environment." },
  { step: "06", title: "Support", description: "Ongoing maintenance and support to ensure long-term success and continuous improvement." },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive IT Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From web development to cloud infrastructure, we offer end-to-end IT services that drive business growth and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover-lift group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    service.color === "purple" ? "bg-primary/10 text-primary" :
                    service.color === "orange" ? "bg-accent/10 text-accent" :
                    service.color === "blue" ? "bg-brand-blue/10 text-brand-blue" :
                    service.color === "green" ? "bg-brand-green/10 text-brand-green" :
                    "bg-brand-pink/10 text-brand-pink"
                  }`}
                >
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-accent" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            description="A proven methodology that ensures successful project delivery every time."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="text-7xl font-bold text-primary/10 absolute -top-4 -left-2">
                  {item.step}
                </span>
                <div className="relative pt-8 pl-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
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
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's discuss your specific requirements and create a tailored solution that fits your business needs.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Get a Free Quote <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

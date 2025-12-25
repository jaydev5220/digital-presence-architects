import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle, Target, Eye, Heart, Users, Award, Rocket, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparency and honesty guide every interaction with our clients.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, ensuring seamless integration.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality is never compromised in any project we undertake.",
  },
];

const milestones = [
  { year: "2009", title: "Company Founded", description: "Started with a vision to democratize technology for businesses." },
  { year: "2012", title: "First Major Client", description: "Secured our first enterprise client, marking a turning point." },
  { year: "2016", title: "Global Expansion", description: "Opened offices in 3 new countries to serve international clients." },
  { year: "2020", title: "Cloud Partnership", description: "Became certified partners with major cloud providers." },
  { year: "2024", title: "Industry Recognition", description: "Awarded Best IT Service Provider by Tech Excellence Awards." },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Empowering Businesses Through Technology
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              For over 15 years, PalladiumHub has been at the forefront of digital innovation, helping businesses transform and thrive in an ever-evolving technological landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                badge="Our Story"
                title="From Vision to Reality"
                align="left"
              />
              <p className="text-muted-foreground mb-6">
                PalladiumHub was born from a simple yet powerful idea: technology should empower businesses, not complicate them. Founded in 2009 by a team of passionate technologists, we set out to bridge the gap between complex IT solutions and practical business needs.
              </p>
              <p className="text-muted-foreground mb-6">
                Over the years, we've grown from a small startup to a trusted IT partner for businesses across the globe. Our journey has been marked by continuous learning, innovation, and an unwavering commitment to our clients' success.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve clients ranging from ambitious startups to Fortune 500 companies, all while staying true to our founding principles of excellence, integrity, and innovation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Team meeting"
                className="rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-8 -left-8 glass-card p-6">
                <div className="flex items-center gap-4">
                  <Globe className="text-primary" size={32} />
                  <div>
                    <p className="font-bold text-2xl text-foreground">15+</p>
                    <p className="text-muted-foreground">Countries Served</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver innovative, reliable, and scalable IT solutions that empower businesses to achieve their full potential. We strive to be the catalyst for digital transformation, helping our clients navigate the complexities of modern technology with confidence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted technology partner, known for transforming businesses through innovative solutions and exceptional service. We envision a future where every organization can harness the power of technology to create lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            description="Our core values shape every decision we make and every solution we deliver."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Our Journey"
            title="Milestones That Define Us"
            description="A look back at the key moments that shaped PalladiumHub."
          />
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                  <div className={`glass-card p-6 inline-block ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
                    <span className="text-primary font-bold text-lg">{milestone.year}</span>
                    <h4 className="text-xl font-bold text-foreground mt-1 mb-2">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                  <Rocket size={16} className="text-primary-foreground" />
                </div>
                
                <div className="flex-1 pl-12 md:pl-0 md:hidden">
                  <div className="glass-card p-6">
                    <span className="text-primary font-bold text-lg">{milestone.year}</span>
                    <h4 className="text-xl font-bold text-foreground mt-1 mb-2">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                badge="Why Choose Us"
                title="Your Success Is Our Priority"
                align="left"
              />
              <ul className="space-y-5">
                {[
                  "Certified experts with proven track record",
                  "Agile methodology for faster time-to-market",
                  "Transparent communication at every stage",
                  "Scalable solutions that grow with you",
                  "Dedicated support and maintenance",
                  "Competitive pricing without compromising quality",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                alt="Team collaboration"
                className="rounded-3xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

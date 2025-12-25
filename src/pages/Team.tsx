import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/SectionHeader";
import TeamMemberCard from "@/components/TeamMemberCard";
import { ArrowRight } from "lucide-react";

const leadership = [
  {
    name: "Alexander Wright",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "20+ years of experience in technology leadership. Former CTO at Fortune 500 companies.",
    linkedin: "#",
    twitter: "#",
    email: "alex@palladiumhub.com",
  },
  {
    name: "Sophia Martinez",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    bio: "Cloud architecture expert with a passion for scalable solutions and emerging technologies.",
    linkedin: "#",
    twitter: "#",
    email: "sophia@palladiumhub.com",
  },
  {
    name: "William Chen",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Operations strategist focused on delivering exceptional client experiences and team excellence.",
    linkedin: "#",
    twitter: "#",
    email: "william@palladiumhub.com",
  },
  {
    name: "Emma Thompson",
    role: "Chief Marketing Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    bio: "Digital marketing visionary with expertise in brand building and growth strategies.",
    linkedin: "#",
    twitter: "#",
    email: "emma@palladiumhub.com",
  },
];

const developers = [
  {
    name: "Daniel Park",
    role: "Lead Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    bio: "Expert in React, Node.js, and cloud technologies. Built systems serving millions of users.",
    linkedin: "#",
    email: "daniel@palladiumhub.com",
  },
  {
    name: "Olivia Johnson",
    role: "Senior UI/UX Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    bio: "Award-winning designer creating intuitive and beautiful user experiences.",
    linkedin: "#",
    email: "olivia@palladiumhub.com",
  },
  {
    name: "Ryan Foster",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    bio: "Infrastructure specialist ensuring 99.99% uptime and seamless deployments.",
    linkedin: "#",
    email: "ryan@palladiumhub.com",
  },
  {
    name: "Sarah Kim",
    role: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
    bio: "iOS and Android expert with 50+ published apps and millions of downloads.",
    linkedin: "#",
    email: "sarah@palladiumhub.com",
  },
  {
    name: "Marcus Johnson",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    bio: "Database optimization specialist and API architect with enterprise experience.",
    linkedin: "#",
    email: "marcus@palladiumhub.com",
  },
  {
    name: "Lisa Wang",
    role: "AI/ML Engineer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
    bio: "Machine learning researcher turned engineer, specializing in NLP and computer vision.",
    linkedin: "#",
    email: "lisa@palladiumhub.com",
  },
  {
    name: "Chris Anderson",
    role: "Security Specialist",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop",
    bio: "Certified ethical hacker protecting our clients from evolving cyber threats.",
    linkedin: "#",
    email: "chris@palladiumhub.com",
  },
  {
    name: "Natalie Brown",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    bio: "Agile certified PM delivering projects on time and exceeding expectations.",
    linkedin: "#",
    email: "natalie@palladiumhub.com",
  },
];

const Team = () => {
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
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet the Experts Behind PalladiumHub
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A talented team of developers, designers, and strategists passionate about creating exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Leadership"
            title="Our Executive Team"
            description="Visionary leaders driving innovation and excellence at PalladiumHub."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <TeamMemberCard key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="The Team"
            title="Our Expert Team"
            description="Skilled professionals dedicated to turning your ideas into reality."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {developers.map((member, index) => (
              <TeamMemberCard key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who share our passion for technology and innovation. Check out our open positions.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                View Careers <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;

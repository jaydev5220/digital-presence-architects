import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@palladiumhub.com",
    subtext: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (234) 567-890",
    subtext: "Mon-Fri 9AM-6PM EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Tech Street, Silicon Valley",
    subtext: "CA 94025, United States",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Friday",
    subtext: "9:00 AM - 6:00 PM EST",
  },
];

const services = [
  "Web Development",
  "Mobile Applications",
  "Cloud Solutions",
  "Cybersecurity",
  "IT Consulting",
  "Custom Software",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have a project in mind? We'd love to hear about it. Get in touch with our team and let's bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto container-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground font-medium">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <Button variant="hero" size="xl" className="w-full">
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="glass-card overflow-hidden h-64 lg:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290621062!2d-122.08424938469226!3d37.42206597982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1635789431234!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>

              {/* Quick Contact Options */}
              <div className="grid gap-6">
                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Live Chat Support</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Chat with our team in real-time for instant answers to your questions.
                    </p>
                    <Button variant="outline" size="sm">Start Chat</Button>
                  </div>
                </div>

                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="text-accent" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Schedule a Meeting</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Book a free consultation with our experts to discuss your project.
                    </p>
                    <Button variant="outline" size="sm">Book Now</Button>
                  </div>
                </div>

                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <Headphones className="text-brand-green" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">24/7 Technical Support</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Existing clients can reach our support team around the clock.
                    </p>
                    <Button variant="outline" size="sm">Get Support</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

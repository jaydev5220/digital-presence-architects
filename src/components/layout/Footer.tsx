import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/team" },
      { name: "Careers", path: "/contact" },
      { name: "Blog", path: "/blog" },
    ],
    services: [
      { name: "Web Development", path: "/services" },
      { name: "Mobile Apps", path: "/services" },
      { name: "Cloud Solutions", path: "/services" },
      { name: "IT Consulting", path: "/services" },
    ],
    support: [
      { name: "Contact Us", path: "/contact" },
      { name: "FAQs", path: "/contact" },
      { name: "Privacy Policy", path: "/contact" },
      { name: "Terms of Service", path: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto container-padding">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="PalladiumHub" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              We code your thought till end. Delivering innovative IT solutions that transform businesses and drive digital success.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@palladiumhub.com" className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors">
                <Mail size={18} />
                <span>info@palladiumhub.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors">
                <Phone size={18} />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} PalladiumHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

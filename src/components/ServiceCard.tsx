import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "purple" | "orange" | "blue" | "green" | "pink";
  index: number;
}

const colorClasses = {
  purple: "bg-primary/10 text-primary",
  orange: "bg-accent/10 text-accent",
  blue: "bg-brand-blue/10 text-brand-blue",
  green: "bg-brand-green/10 text-brand-green",
  pink: "bg-brand-pink/10 text-brand-pink",
};

const ServiceCard = ({ icon: Icon, title, description, color, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group glass-card p-8 hover-lift"
    >
      <div
        className={`w-14 h-14 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;

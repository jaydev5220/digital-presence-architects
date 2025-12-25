import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

const SectionHeader = ({ badge, title, description, align = "center", children }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 md:mb-16`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-sm font-semibold rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeader;

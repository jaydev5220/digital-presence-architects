import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
  index: number;
}

const TestimonialCard = ({ name, role, company, content, image, rating, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-8 relative"
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
      
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "text-accent fill-accent" : "text-muted-foreground"}
          />
        ))}
      </div>
      
      <p className="text-foreground/80 leading-relaxed mb-6 italic">"{content}"</p>
      
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

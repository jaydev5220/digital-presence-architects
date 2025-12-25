import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  slug: string;
  index: number;
}

const BlogCard = ({ title, excerpt, image, category, author, date, slug, index }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group glass-card overflow-hidden hover-lift"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <User size={14} />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {date}
          </span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;

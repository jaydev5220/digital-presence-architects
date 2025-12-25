import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  index: number;
}

const TeamMemberCard = ({ name, role, image, bio, linkedin, twitter, email, index }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl mb-5">
        <img
          src={image}
          alt={name}
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-3">
            {linkedin && (
              <a
                href={linkedin}
                className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-accent hover:text-foreground transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-accent hover:text-foreground transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-accent hover:text-foreground transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
      <p className="text-primary font-medium mb-2">{role}</p>
      <p className="text-muted-foreground text-sm">{bio}</p>
    </motion.div>
  );
};

export default TeamMemberCard;

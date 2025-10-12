import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionCardProps {
  title: string;
  description: string;
  image: string;
  id: string;
  link: string;
  gradient?: "primary" | "secondary";
}

export const SectionCard = ({
  title,
  description,
  image,
  id,
  link,
  gradient = "primary",
}: SectionCardProps) => {
  return (
    <Link to={link} className="block">
      <div
        id={id}
        className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-glow animate-fade-in-up cursor-pointer"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
        </div>

        <div className="relative p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
            {description}
          </p>
          <div
            className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${
              gradient === "primary"
                ? "from-primary to-accent"
                : "from-secondary to-primary"
            } text-primary-foreground transition-all duration-300 shadow-lg group-hover:shadow-glow`}
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

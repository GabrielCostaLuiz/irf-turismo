"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  subtitle: string;
  titleNormal: string;
  titleHighlight: string;
  description?: string;
  icon?: LucideIcon;
  center?: boolean;
  descriptionBelow?: boolean;
  className?: string;
}

export default function SectionHeader({
  subtitle,
  titleNormal,
  titleHighlight,
  description,
  icon: Icon,
  center = false,
  descriptionBelow = false,
  className = "",
}: SectionHeaderProps) {
  const isDescriptionBelow = center || descriptionBelow;

  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : "md:flex-row justify-between items-end"} mb-16 gap-8 ${className}`}>
      <div className="max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`flex items-center gap-3 text-gold text-sm font-bold uppercase tracking-[0.3em] mb-4 ${center ? "justify-center" : ""}`}
        >
          {Icon && <Icon size={18} />}
          {subtitle}
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white leading-[1.1]"
        >
          {titleNormal} <span className="gold-gradient">{titleHighlight}</span>
        </motion.h2>

        {isDescriptionBelow && description && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`mt-6 text-white/40 text-lg max-w-2xl ${center ? "mx-auto" : ""}`}
          >
            {description}
          </motion.p>
        )}
      </div>

      {!isDescriptionBelow && description && (
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md text-white/50 text-right hidden lg:block text-sm md:text-base leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

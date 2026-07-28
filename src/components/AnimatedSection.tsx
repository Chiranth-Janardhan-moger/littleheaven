import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface AnimatedSectionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};


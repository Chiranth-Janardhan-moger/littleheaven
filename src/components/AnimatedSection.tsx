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

export const AnimatedCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{
        y: -6,
        scale: 1.015,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }}
      whileTap={{ scale: 0.98 }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

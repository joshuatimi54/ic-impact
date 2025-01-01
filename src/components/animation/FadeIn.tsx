import { motion } from 'framer-motion';
import React from 'react';

interface IProps {
  children: JSX.Element[] | JSX.Element;
  className?: string;
  delay?: number;
  inView?: boolean;
  exitDelay?: number;
  up?: boolean;
  opacity?: boolean;
  upValue?: number;
}

const FadeIn: React.FC<IProps> = ({
  children,
  className,
  delay,
  inView,
  exitDelay,
  up = false,
  opacity = true,
  upValue = 20,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: up && !inView ? 0 : !up && inView ? upValue : upValue,
      }}
      animate={{
        opacity: !opacity ? '' : inView ? 1 : 0,
        y: up && inView ? 0 : up && !inView ? upValue : 0,
        transition: {
          duration: 0.8,
          delay: delay ?? 0,
          ease: 'easeInOut',
        },
      }}
      exit={{
        y: up ? 20 : 0,
        opacity: 0,
        transition: {
          duration: 0.8,
          delay: exitDelay ?? 0,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

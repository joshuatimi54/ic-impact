import React from 'react';
import { motion } from 'framer-motion';
interface Props {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
  styling?: string;
  inview?: boolean;
  delay?: number;
  onAnimationComplete?: () => void;
}

const BlurText = ({ children, styling, inview, delay, onAnimationComplete }: Props) => {
  return (
    <motion.span
      initial={{ filter: 'blur(5px)' }}
      animate={{
        filter: inview ? 'blur(0px)' : 'blur(15px)',
        transition: { duration: 0.5, ease: 'easeIn', delay: delay },
      }}
      exit={{ filter: 'blur(15px)' }}
      className={`${styling}`}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.span>
  );
};

export default BlurText;

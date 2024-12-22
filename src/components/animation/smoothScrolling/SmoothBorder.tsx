import React from 'react';
import { motion } from 'framer-motion';

interface IProps {
  inView: boolean;
  initialOpacity?: number;
  finalOpacity?: number;
  initialWidth?: string;
  finalWidth?: string;
  duration?: number;
  delay?: number;
  easing?: number[];
  className?: string;
  bgColor?: string;
}

const SmoothBorder: React.FC<IProps> = ({
  inView,
  initialOpacity = 0,
  finalOpacity = 1,
  initialWidth = '0',
  finalWidth = '100%',
  duration = 0.8,
  delay,
  easing,
  bgColor = '#C9C9C9',
  className = `absolute left-0 bottom-[-2px] max-[720px]:bottom-[4px] h-0.5 `,
}) => {
  return (
    <motion.span
      initial={{ opacity: initialOpacity, width: initialWidth }}
      animate={{
        opacity: inView ? finalOpacity : initialOpacity,
        width: inView ? finalWidth : initialWidth,
        transition: {
          duration: duration,
          delay: delay,
          ease: easing,
        },
      }}
      exit={{
        opacity: !inView ? initialOpacity : '',
        width: !inView ? initialWidth : '',
      }}
      className={`${className} bg-[${bgColor}] `}
    ></motion.span>
  );
};

export default SmoothBorder;

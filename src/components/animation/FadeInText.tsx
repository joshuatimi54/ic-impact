import React from "react";
import { motion } from "framer-motion";

interface IProps {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
  exitDelay?: number;
  initialPush?: boolean;
  push?: boolean;
  blur?: boolean;
  onAnimationComplete?: () => void;
}

const FadeInText: React.FC<IProps> = ({
  children,
  className,
  delay,
  inView,
  exitDelay,
  push,
  initialPush = false,
  // blur,
  onAnimationComplete,
}) => {
  return (
    <motion.span
      initial={{
        opacity: 0,
        y: initialPush ? 20 : 0,
        // filter: blur ? "blur(10px)" : "blur(0)",
      }}
      animate={{
        opacity: inView ? 1 : 0,
        y: push && inView ? 20 : inView ? 0 : 0,
        // filter: blur ? "blur(0px)" : "blur(10px)",
        transition: {
          duration: 0.5,
          delay: delay ?? 0,
        },
      }}
      exit={{
        y: 50,
        opacity: 0,
        transition: {
          duration: 0.5,
          delay: exitDelay ?? 0,
        },
      }}
      className={className}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.span>
  );
};

export default FadeInText;

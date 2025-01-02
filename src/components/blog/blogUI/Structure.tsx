import React from 'react';
import { motion } from 'framer-motion';

type IProps = {
  children: React.ReactNode;
  inView?: boolean;
  active?: boolean;
};

const Structure: React.FC<IProps> = ({ children, inView, active = false }) => {
  return (
    <motion.div
      initial={{ opacity: active && !inView ? 0 : active === true && !inView ? 0 : 1 }}
      animate={{ opacity: active && inView ? 1 : active === true && !inView ? 0 : 1 }}
      exit={{ opacity: active && !inView ? 0 : !active && !inView ? 1 : 1 }}
      className="bg-white w-[100%] rounded-[10px] mt-[50px]"
    >
      {children}
    </motion.div>
  );
};

export default Structure;

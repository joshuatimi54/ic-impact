import React from 'react';
import { motion } from 'framer-motion';
import Texts from '../Texts';

interface FormStatusProps {
  motionDirection: number;
  setCurrentIndex: (arg: number) => void;
}

const FormStatus: React.FC<FormStatusProps> = ({ motionDirection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: motionDirection }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: motionDirection, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white flex flex-col items-center justify-center h-[200px] w-full px-3 "
    >
      <div className="flex flex-col items-center gap-[40px]">
        <Texts className="flex items-center justify-center text-center gap-1 text-green-500">
          <span className="flex">
            Your Application to join the IC-IMPACT COMMUNITY, has been received, kindly
            check your Email for further Instructions.
          </span>
        </Texts>
        <a href="https://tinyurl.com/ICI-website-leads">
          Click on this{' '}
          <span className="text-cyanish">https://tinyurl.com/ICI-website-leads</span> to
          join our whatsapp group.{' '}
        </a>
        <Texts>See you in the Circle!</Texts>
      </div>
    </motion.div>
  );
};

export default FormStatus;

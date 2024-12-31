import React from 'react';
import { motion } from 'framer-motion';
import Texts from '../Texts';
import { Check } from 'lucide-react';

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
      className="bg-white flex flex-col items-center justify-center h-[200px] w-full "
    >
      <div className="flex flex-col items-center gap-[40px]">
        <Texts className="flex items-center gap-2 text-green-500 text-[20px]">
          <span>Your Message has sent successfully</span>
          <span>{<Check />} </span>
        </Texts>
      </div>
    </motion.div>
  );
};

export default FormStatus;

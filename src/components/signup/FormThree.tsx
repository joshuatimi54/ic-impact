import React from 'react';
import TextField from '../TextField';
import { FormikProps } from 'formik';
import { motion } from 'framer-motion';
import Texts from '../Texts';
import { FormValues } from '@/types/FormType';

interface FormThreeProps {
  formik: FormikProps<FormValues>;
  motionDirection: number;
}

const FormThree: React.FC<FormThreeProps> = ({ formik, motionDirection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: motionDirection }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: motionDirection, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-1 w-[90%] mb-[30px] mx-auto">
        <h3 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black text-[30px] text-center max-[950px]:text-[32px] max-[600px]:text-[28px] leading-[50px] mx-auto w-full mt-[30px]">
          Purpose and Personal Development
        </h3>
        <Texts>
          kindly answer this section with all honesty, you won't be judged base on your
          response you will only help us to know how we can{' '}
          <span className="text-greenish">Help you Grow.</span>{' '}
        </Texts>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="w-[90%] mx-auto">
          <TextField
            name="motivation"
            type="text"
            value={formik?.values?.motivation}
            onChange={formik?.handleChange}
            onBlur={formik.handleBlur}
            label="What Motivated You To Apply For IC-IMPACT"
            error={formik.touched?.motivation ? formik.errors.motivation : ''}
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="Share what drew you to the community"
          />

          <TextField
            name="purpose"
            type="text"
            value={formik.values.purpose}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Have You Identified Your Purpose in Life"
            error={formik.touched.purpose ? formik.errors.purpose : ''}
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="My discovered purpose is... "
            style="mt-4"
            subLabel={true}
          />

          <TextField
            name="improvements"
            type="text"
            value={formik.values.improvements}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="What Areas of your Life Would You Like To Improve"
            error={formik.touched.improvements ? formik.errors.improvements : ''}
            className="bg-[#F4F4F4] mt-1"
            requiredIndicator
            placeholder="Write out as much as you can"
          />

          <TextField
            name="talents"
            type="text"
            value={formik.values.talents}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Do you have any Skills or Talents You Want To Develop"
            error={formik.touched.talents ? formik.errors.talents : ''}
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="Yes/No - If yes, specify."
          />

          <TextField
            name="commitment"
            type="text"
            value={formik.values.commitment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="How Would You Describe Your Commitment To Personal Growth"
            error={formik.touched.commitment ? formik.errors.commitment : ''}
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="Low, Moderate, High - Explain your choice"
          />
        </div>
      </form>
    </motion.div>
  );
};

export default FormThree;

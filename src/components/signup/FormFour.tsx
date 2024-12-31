import React from 'react';
import TextField from '../TextField';
import { FormikProps } from 'formik';
import { motion } from 'framer-motion';
import Texts from '../Texts';
import { FormValues } from '@/types/FormType';

interface FormFourProps {
  formik: FormikProps<FormValues>;
}

const FormFour: React.FC<FormFourProps> = ({ formik }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <div className="flex flex-col gap-1 w-[90%] mb-[30px] mx-auto">
        <h3 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black text-[30px] text-center max-[950px]:text-[32px] max-[600px]:text-[28px] leading-[50px] mx-auto w-full mt-[30px]">
          Financial Goals
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
            name="currFinance"
            type="text"
            value={formik?.values?.currFinance}
            onChange={formik?.handleChange}
            onBlur={formik.handleBlur}
            label="What is your current financial situation"
            error={formik.touched?.currFinance ? formik.errors.currFinance : ''}
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="Unemployed, Struggling to save, Employed"
            labelStyle="capitalize"
          />

          <TextField
            name="financialIndependence"
            type="text"
            value={formik.values.financialIndependence}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="What way(s) have you explored to achieve financial independence"
            error={
              formik.touched.financialIndependence
                ? formik.errors.financialIndependence
                : ''
            }
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="Ways you have tried to achieve financial independence"
            style="mt-4"
            labelStyle="capitalize"
          />

          <TextField
            name="financialGrowth"
            type="text"
            value={formik.values.financialGrowth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="What skills or resources do you think you need to achieve financial growth"
            error={formik.touched.financialGrowth ? formik.errors.financialGrowth : ''}
            className="bg-[#F4F4F4] mt-1"
            requiredIndicator
            placeholder="Tell us skills or resources you used"
            labelStyle="capitalize"
          />

          <TextField
            name="learning"
            type="text"
            value={formik.values.learning}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Are you willing to commit to learning and applying financial principles taught in IC-IMPACT"
            error={formik.touched.learning ? formik.errors.learning : ''}
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="Yes, No, Maybe"
            labelStyle="capitalize"
          />

          <TextField
            name="digitalSkill"
            type="text"
            value={formik.values.digitalSkill}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Do you currently have any digital skill?"
            error={formik.touched.digitalSkill ? formik.errors.digitalSkill : ''}
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="Designer, UX, photography etc"
            labelStyle="capitalize"
          />

          <TextField
            name="opportunity"
            type="text"
            value={formik.values.opportunity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="If you have the opportunity of learning a digital skill, What would it be"
            error={formik.touched.opportunity ? formik.errors.opportunity : ''}
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="Enter your city here"
            labelStyle="capitalize"
          />
        </div>
      </form>
    </motion.div>
  );
};

export default FormFour;

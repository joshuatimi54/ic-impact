import React from 'react';
import TextField from '../TextField';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormikProps } from 'formik';
import { motion } from 'framer-motion';
import Texts from '../Texts';
import { StarIcon } from 'lucide-react';
import { FormValues } from '@/types/FormType';

interface FormTwoProps {
  formik: FormikProps<FormValues>;
  motionDirection: number;
}

const FormTwo: React.FC<FormTwoProps> = ({ formik, motionDirection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: motionDirection }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: motionDirection, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <div className="flex flex-col gap-2 w-[90%] mb-4 mx-auto">
        <h3 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black text-[30px] text-center max-[950px]:text-[32px] max-[600px]:text-[28px] leading-[50px] mx-auto w-full mt-[30px]">
          Spiritual Life Information
        </h3>
        <Texts>
          kindly answer this section with all honesty, you won't be judged base on your
          response you will only help us to know how we can{' '}
          <span className="text-greenish">Help you Grow.</span>{' '}
        </Texts>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col gap-1">
            <Select
              name="relationship"
              value={formik.values.relationship}
              onValueChange={(e: string) => formik.setFieldValue('relationship', e)}
            >
              <p className="flex items-start gap-1">
                <span>How will you describe your current relationship with God?</span>{' '}
                <span className="text-red-600">*</span>{' '}
              </p>
              <SelectTrigger className="w-full mt-1 rounded-[10px] text-gray-800 bg-inputGrey">
                <SelectValue placeholder="Choose your relationship" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup onBlur={formik.handleBlur}>
                  <SelectLabel>Rate the relationship</SelectLabel>
                  <SelectItem value="Very Strong">Very Strong</SelectItem>
                  <SelectItem value="Still Growing">Still Growing</SelectItem>
                  <SelectItem value="Feeling Stagnant">Feeling Stagnant</SelectItem>
                  <SelectItem value="Disconnected">Disconnected</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Texts className="mt-2 flex flex-col items-start gap-[5px] text-xs text-red-600 capitalize font-medium">
              {formik.errors?.relationship}{' '}
            </Texts>
          </div>

          <div className="flex flex-col gap-1">
            <Select
              name="rate"
              value={formik.values.rate}
              onValueChange={(e: string) => formik.setFieldValue('rate', e)}
            >
              <p className="flex items-start gap-1 mt-4">
                <span>How would you describe your current relationship with God?</span>{' '}
                <span className="text-red-600">*</span>{' '}
              </p>
              <SelectTrigger className="w-full mt-1 rounded-[10px] text-gray-800 bg-inputGrey">
                <SelectValue placeholder="Relationship with God" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">
                    <StarIcon size={16} className="text-yellow-600" />{' '}
                  </SelectItem>
                  <SelectItem value="2">
                    {' '}
                    <span className="flex items-center">
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                    </span>{' '}
                  </SelectItem>
                  <SelectItem value="3">
                    <span className="flex items-center">
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                      <StarIcon size={16} color="text-yellow-600" />{' '}
                    </span>{' '}
                  </SelectItem>
                  <SelectItem value="4">
                    <span className="flex items-center">
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                    </span>{' '}
                  </SelectItem>
                  <SelectItem value="5">
                    <span className="flex items-center">
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                      <StarIcon size={16} className="text-yellow-600" />{' '}
                    </span>{' '}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Texts className="mt-2 flex flex-col items-start gap-[5px] text-xs text-red-600 capitalize font-medium">
              {formik.errors?.rate}{' '}
            </Texts>
          </div>

          <TextField
            name="challenge"
            type="text"
            value={formik?.values?.challenge}
            onChange={formik?.handleChange}
            onBlur={formik.handleBlur}
            label="What Are Your Biggest Spiritual Challenges Right Now?"
            error={formik.touched?.challenge ? formik.errors.challenge : ''}
            className="bg-[#F4F4F4] rounded-[10px]"
            requiredIndicator
            placeholder="Enter your Spiritual Challenge here"
            style="mt-4"
          />

          <TextField
            name="goals"
            type="text"
            value={formik.values.goals}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="What Spiritual Goals Do You Plan To Achieve Through This Community"
            error={formik.touched.goals ? formik.errors.goals : ''}
            className="bg-[#F4F4F4] rounded-[10px]"
            requiredIndicator
            placeholder="Examples: Prayer consistency, Bible study"
            style="mt-4"
          />
        </div>
      </form>
    </motion.div>
  );
};

export default FormTwo;

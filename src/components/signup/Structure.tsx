import React from 'react';
import { Button } from '../ui/button';
import { ChevronsLeft, ChevronsRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { FormikProps } from 'formik';
import { FormValues } from '@/types/FormType';
import { Link } from 'react-router-dom';

type IProps = {
  children: React.ReactNode;
  formik: FormikProps<FormValues>;
  previous?: () => void;
  next?: () => void;
  currentFormIndex: number;
  setCurrentFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Structure: React.FC<IProps> = ({
  children,
  previous,
  next,
  currentFormIndex,
  formik,
  // setCurrentFormIndex,
}) => {
  /*const handleReset = () => {
    setCurrentFormIndex(0);
  };*/
  return (
    <div
      style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      className={`bg-white flex flex-col gap-[50px] border border-black min-[600px]:max-w-[600px] max-[600px]:max-w-full min-[600px]:w-[600px] max-[600px]:w-[100%] min-[600px]:min-w-[500px] pt-[20px] mb-[50px] pb-[40px] rounded-[10px] `}
    >
      {children}
      <div className="w-[90%] mx-auto flex justify-between gap-[30px] mt-[50px] ">
        {currentFormIndex === 4 ? (
          <Button
            className="flex items-center justify-center gap-2 bg-orangish "
            onClick={next}
          >
            <Link className="flex items-center justify-center gap-2" to="/">
              <span>Go Back Home </span>
              <span>
                {' '}
                <Home size={20} />{' '}
              </span>
            </Link>
          </Button>
        ) : (
          <Button
            className="flex items-center justify-center gap-2 bg-transparent border border-orangish text-orangish "
            onClick={previous}
          >
            <span>
              {' '}
              <ChevronsLeft size={20} />{' '}
            </span>
            <span>Previous </span>
          </Button>
        )}
        {currentFormIndex === 4 ? (
          <Button
            className="flex items-center justify-center gap-2 bg-orangish "
            // onClick={handleReset}
          >
            <Link to="https://tinyurl.com/ic-impact-official-group" target='_blank'>
              <span>Join WhatsApp Group </span>
              <span>
                {' '}
                <ChevronsRight size={20} />{' '}
              </span>
            </Link>
          </Button>
        ) : currentFormIndex === 3 ? (
          <Button
            type="submit"
            className="flex items-center justify-center gap-2 bg-greenish "
            onClick={() => formik.handleSubmit()}
          >
            <span>Submit </span>
            {formik.isSubmitting ? (
              <p role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </p>
            ) : (
              <span> {<ChevronsRight size={20} />}</span>
            )}
          </Button>
        ) : (
          <Button
            className="flex items-center justify-center gap-2 bg-orangish "
            onClick={next}
          >
            <span>Next </span>
            <span>
              {' '}
              <ChevronsRight size={20} />{' '}
            </span>
          </Button>
        )}
      </div>
      <div className="w-[90%] mx-auto h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-[30px]">
        <motion.div
          animate={{
            width:
              currentFormIndex === 0
                ? '25%'
                : currentFormIndex === 1
                ? '50%'
                : currentFormIndex === 2
                ? '75%'
                : '100%',
          }}
          className="h-6 bg-cyanish rounded-full dark:bg-blue-500"
        ></motion.div>
      </div>
    </div>
  );
};

export default Structure;

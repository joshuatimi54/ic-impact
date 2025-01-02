/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import clsx from 'clsx';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Input } from './ui/input';

interface TextFieldProps {
  type?: 'text' | 'email' | 'number' | 'password' | 'date';
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  value: string | number | null;
  label?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  error?: string;
  showPasswordToggler?: boolean;
  className?: any;
  step?: any;
  onWheel?: (e: any) => void;
  min?: number;
  indicator?: string;
  missingCriteria?: string;
  loadingSpinner?: boolean;
  requiredIndicator?: boolean;
  style?: string;
  subLabel?: boolean;
  labelStyle?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  type = 'text',
  onChange,
  onBlur,
  value,
  label,
  placeholder,
  name,
  disabled = false,
  error,
  showPasswordToggler,
  className,
  step,
  onWheel,
  min,
  indicator,
  missingCriteria,
  loadingSpinner,
  requiredIndicator,
  style,
  subLabel = false,
  labelStyle,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`relative ${style} `}>
      {label && (
        <label
          className={`${labelStyle} font-sourceSansBold font-medium font-inter text-sm text-[#000000]`}
        >
          <span>{label} </span>
          {requiredIndicator && <span className="text-[red] font-inter">* </span>}
        </label>
      )}
      <div className="relative mb-5">
        {subLabel && (
          <span className="text-gray-400 mt-1 text-[14px]">
            If yes briefly describe it. If no, what challenges are you facing discovering
            it?{' '}
          </span>
        )}
        <div className="relative">
          <Input
            className={clsx({
              'form-input font-sans py-[20px] px-3 bg-gray-50 text-sm placeholder:font-sourceSans font-normal placeholder:text-white-dark rounded-[10px] mt-1 border border-[#0000001A]': true,
              'bg-red-50 font-sourceSansBold placeholder:font-sourceSans border border-red-500 text-red-900 placeholder:text-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500': error,
              [className]: className,
            })}
            placeholder={placeholder}
            value={value ?? ''}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            type={showPassword ? 'text' : type}
            autoComplete="false"
            step={step}
            onWheel={onWheel}
            min={min}
          />
          {showPasswordToggler && (
            <div
              role="button"
              tabIndex={-1}
              onKeyDown={() => setShowPassword((prevState) => !prevState)}
              onClick={() => setShowPassword((prevState) => !prevState)}
            >
              <span className="absolute -translate-y-1/2 end-4 top-1/2">
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>
          )}
          {loadingSpinner && (
            <div
              className="absolute top-1/3 left-[30px] inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
        </div>
        {error && (
          <p className="mt-2 text-xs text-red-600 font-sourceSans capitalize">{error}</p>
        )}
        {indicator === 'Strong' ? (
          <p className="mt-2 text-xs text-green-600 capitalize font-medium">
            Excellent! {indicator} password{' '}
          </p>
        ) : indicator === 'Medium' ? (
          <p className="mt-2 flex flex-col items-start gap-[5px] text-xs  text-yellow-600 capitalize font-medium">
            <span>Good! your password strength is {indicator}</span>
            <span>{indicator && `Consider adding: ${missingCriteria} `} </span>
          </p>
        ) : indicator === 'Weak' ? (
          <p className="mt-2 flex flex-col items-start gap-[5px] text-xs text-red-600 capitalize font-medium">
            <span>Password is too {indicator}! </span>
            {indicator && missingCriteria ? (
              <span>{`Consider adding: ${missingCriteria} `}</span>
            ) : (
              ''
            )}
          </p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default TextField;

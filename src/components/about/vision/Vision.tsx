import clsx from 'clsx';
import React from 'react';

type IProps = {
  heading: string;
  text: React.ReactNode;
  subText: React.ReactNode;
  conclude?: React.ReactNode;
  bgColor: string;
};

const Vision: React.FC<IProps> = ({ heading, text, subText, conclude, bgColor }) => {
  return (
    <div className="max-w-[450px] min-w-[400px] max-[500px]:min-w-[200px] ">
      <div
        className={clsx(
          `py-[15px] px-2 rounded-tl-[15px] rounded-tr-[15px]`,
          bgColor && `bg-${bgColor}`
        )}
      ></div>
      <h2 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black bg-white text-[30px] pt-3 text-center leading-[40px]">
        {heading}
      </h2>
      <div className="bg-white min-h-[300px] flex flex-col justify-start items-start rounded-bl-[15px] pb-6 rounded-br-[15px]">
        <div className="flex flex-col justify-between gap-3 w-[80%] mt-[50px] max-[400px]:mt-[30px] mx-auto">
          <div>{text ?? ''} </div>
          <div>{subText ?? ''} </div>
          <div>{conclude ?? ''} </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

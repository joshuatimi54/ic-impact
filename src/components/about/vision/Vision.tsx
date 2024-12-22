import clsx from "clsx";
import React from "react";

type IProps = {
  heading: string;
  text: React.ReactNode;
  subText: React.ReactNode;
  conclude?: React.ReactNode;
  bgColor: string;
};

const Vision: React.FC<IProps> = ({
  heading,
  text,
  subText,
  conclude,
  bgColor,
}) => {
  return (
    <div className="max-w-[500px] min-w-[400px] max-[500px]:min-w-[200px] ">
      <div
        className={clsx(
          `py-[20px] px-2 rounded-tl-[30px] rounded-tr-[30px]`,
          bgColor && `bg-${bgColor}`
        )}
      >
        <h2 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-white text-[30px] text-center leading-[40px]">
          {heading}
        </h2>
      </div>
      <div className="bg-white min-h-[300px] flex flex-col justify-start items-start rounded-bl-[30px] pb-6 rounded-br-[30px]">
        <div className="flex flex-col justify-between gap-3 w-[80%] mt-[50px] max-[400px]:mt-[30px] mx-auto">
          <div>{text ?? ""} </div>
          <div>{subText ?? ""} </div>
          <div>{conclude ?? ""} </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

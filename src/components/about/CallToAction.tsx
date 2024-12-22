import React from 'react';
import dune from '@/assets/dune.webp';
import Texts from '@/components/Texts';
import actionImg from '@/assets/actionImg.webp';
import ButtonItem from '@/components/button/Button';

const CallToAction: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${dune})`,
      }}
      className="flex flex-col items-center justify-center h-[60vh] w-full"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-[150px]">
          <img src={actionImg} alt="img" />
        </div>
        <h1 className="scroll-m-20 font-sourceSansBold tracking-tight text-[30px] leading-[55px]">
          Join the Movement
        </h1>
        <Texts>Ready to make an impact?</Texts>
        <ButtonItem className="mt-4">Sign Up</ButtonItem>
      </div>
    </div>
  );
};

export default CallToAction;

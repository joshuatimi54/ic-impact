import React from 'react';
import headset from '@/assets/contactHeroImg.png';
import Texts from '../Texts';

const ContactHero: React.FC = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${headset})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full h-[60vh] text-white relative flex flex-col items-center justify-center"
      >
        <div className="absolute z-[1] bg-black/80 w-full h-full"></div>
        <div className={`relative z-[2] flex flex-col justify-center items-center`}>
          <h1
            className={`mt-[40px] scroll-m-20 font-rozanovaBold tracking-tight text-[35px]`}
          >
            Contact Us
          </h1>

          <Texts
            className={`mt-4 text-center scroll-m-20 tracking-tight text-[20px] !font-extrabold"`}
          >
            Get in Touch
          </Texts>
          <Texts className={`max-w-[520px] text-center mt-1 mx-4`}>
            We're here to help. Reach out to us with your questions or feedback.
          </Texts>
        </div>
      </div>
      {/* <PagesHero
        bgImage={headset}
        header="Contact Us"
        subHeader="Get in Touch"
        subText="We're here to help. Reach out to us with your questions or feedback."
        mainConStyle="h-[60vh] max-[600px]:h-[60vh] max-[480px]:h-[60vh] w-[80%] mx-auto"
        subConStyle="max-w-[520px] text-center mt-1"
        headerStyle="text-[35px]"
      /> */}
    </div>
  );
};

export default ContactHero;

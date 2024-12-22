import React from 'react';
import PagesHero from '../PagesHero';
import earth from '@/assets/earthMap.webp';

const ContactHero: React.FC = () => {
  return (
    <div>
      <PagesHero
        bgImage={earth}
        header="Contact Us"
        subHeader="Get in Touch"
        subText="We're here to help. Reach out to us with your questions or feedback."
        mainConStyle="h-[60vh] max-[600px]:h-[60vh] max-[480px]:h-[60vh] w-[80%] mx-auto"
        subConHeaderStyle="scroll-m-20 tracking-tight text-[20px] !font-extrabold"
        subConStyle="max-w-[520px] text-center mt-1"
        headerStyle="text-[35px]"
      />
    </div>
  );
};

export default ContactHero;

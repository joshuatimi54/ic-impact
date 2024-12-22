import React from 'react';
import dune from '@/assets/dune.webp';
import PagesHero from '../PagesHero';

const AboutHero: React.FC = () => {
  return (
    <div>
      <PagesHero
        bgImage={dune}
        mainConStyle="h-[60vh] max-[540px]:h-[70vh] w-full"
        header="About Us"
        headerStyle="text-[40px] leading-[55px]"
        subText=" From Vision to Impact: The Story Behind IC-IMPACT Commmnity"
        subConStyle="w-[90%]"
      />
    </div>
  );
};

export default AboutHero;

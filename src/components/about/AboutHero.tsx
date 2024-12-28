import React from 'react';
import dune from '@/assets/dune.webp';
import PagesHero from '../PagesHero';

const AboutHero: React.FC = () => {
  return (
    <div>
      <div>
        <PagesHero
          bgImage={dune}
          mainConStyle="h-[70vh] max-[540px]:h-[60vh] w-full"
          header="About Us"
          headerStyle="text-[40px] leading-[55px] text-white max-[600px]:text-black"
          subText=" From Vision to Impact: The Story Behind IC-IMPACT Commmnity"
          subConStyle="w-[90%] text-white max-[600px]:text-black"
          showAboutHeroImg={true}
        />
      </div>
    </div>
  );
};

export default AboutHero;

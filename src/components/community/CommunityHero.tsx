import React from 'react';
import PagesHero from '../PagesHero';
import earth from '@/assets/earthMap.webp';

const CommunityHero: React.FC = () => {
  return (
    <div>
      <PagesHero
        bgImage={earth}
        header="Community"
        subHeader="Empowering Change, One Life at Time."
        subText="Join a community committed to elevating your potential, driving your growth, and inspiring positive change. Together, we can make an Impact."
        mainConStyle="h-[70vh] max-[600px]:h-[70vh] max-[480px]:h-[80vh] w-[80%] mx-auto"
        subConHeaderStyle="scroll-m-20 tracking-tight text-[20px] !font-extrabold"
        subConStyle="max-w-[520px] text-center mt-1"
        headerStyle="text-[35px]"
        showCommunityHeroImg={true}
      />
    </div>
  );
};

export default CommunityHero;

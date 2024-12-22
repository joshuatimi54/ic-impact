import React from 'react';
import studioGuy from '@/assets/guyWithHeadset.webp';
import girlFoldingArms from '@/assets/girlFoldingArms.webp';
import jackedGuy from '@/assets/jacketedGuy.webp';
import Texts from '../Texts';
import { useInView } from 'react-intersection-observer';
import FadeIn from '../animation/FadeIn';

const SafeHaven: React.FC = () => {
  const [refOne, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center">
      <div className="flex max-[980px]:flex-col items-center justify-between gap-[30px] min-[1800px]:w-[1500px] max-[1800px]:w-[90%] mx-auto  max-[980px]:mt-[30px] max-[980px]:mb-[50px]">
        <div ref={refOne} className="flex items-center gap-[20px]">
          <FadeIn
            inView={inView}
            opacity={false}
            delay={0.3}
            className="max-w-[200px] h-[400px]"
          >
            <img className="h-full w-full object-cover" src={studioGuy} alt="img" />
          </FadeIn>
          <FadeIn
            inView={inView}
            opacity={false}
            delay={0.6}
            className="max-w-[200px] h-[400px]"
          >
            <img className="h-full w-full object-cover" src={girlFoldingArms} alt="img" />
          </FadeIn>
          <FadeIn
            inView={inView}
            opacity={false}
            delay={0.9}
            className="max-w-[200px] h-[400px]"
          >
            <img className="h-full w-full object-cover" src={jackedGuy} alt="img" />
          </FadeIn>
        </div>
        <FadeIn up={false} inView={inView}>
          <div className="flex flex-col gap-4 max-w-[450px]">
            <Texts>
              <strong>IC-IMPACT COMMUNITY is the ultimate haven</strong> for young
              individuals seeking spiritual growth, discovering their God-given purpose,
              and achieving financial independence.
            </Texts>
            <Texts>
              Inspired by the Holy Spirit and brought to life by Adewale Tomiwa Jephthah,
              this transformative mentorship network is designed to inspire, empower, and
              equip you to live a life of purpose and impact.
            </Texts>
            <Texts>
              The vision for IC-IMPACT emerged during a profound spiritual retreat on
              October 2, 2024, when the word IMPACT was divinely revealed. Through months
              of prayer, reflection, and preparation, the initiative officially launched
              on November 30, 2024, as a beacon of hope for young people navigating life’s
              challenges.
            </Texts>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default SafeHaven;

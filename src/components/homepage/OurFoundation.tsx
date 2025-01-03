import React from 'react';
import fdnImg from '@/assets/foundation.webp';
import clans from '@/assets/clan.webp';
import Texts from '../Texts';
import BlurText from '../animation/BlurText';
import { useInView } from 'react-intersection-observer';
import Star from '@/assets/Star.webp';
import FadeIn from '../animation/FadeIn';

const OurFoundation: React.FC = () => {
  const [refOne, inViewOne] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [refTwo, inViewTwo] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="relative min-[1800px]:min-h-[40vh] min-h-[60vh] max-h-[100vh] max-[480px]:h-[100vh] flex flex-col justify-center items-center bg-greyish">
      <div className="flex relative z-[9] px-4 py-[20px] min-w-[400px] max-[500px]:min-w-[90%] min-[1800px]:max-w-[1200px] w-full max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto max-[1200px]:my-[50px] bg-white rounded-[15px]">
        <div
          ref={refOne}
          className="flex max-[1200px]:flex-col max-[1200px]:items-center justify-between gap-[25px] max-[1200px]:gap-[30px] mx-auto w-[95%] max-[400px]:w-[100%] h-[100%]"
        >
          <div className="flex max-[500px]:flex-col items-start justify-between gap-[30px] w-[55%] max-[1200px]:w-[70%] max-[850px]:w-[90%] max-[400px]:w-[95%]">
            <div className="flex flex-col items-center justify-between gap-[20px] h-full max-[500px]:w-full">
              <h2 className="scroll-m-20 text-[35px] max-[650px]:text-[28px] font-semibold tracking-tight first:mt-0">
                <BlurText inview={inViewOne}>Our Foundation</BlurText>
              </h2>
              <div className="max-w-[250px] max-[650px]:max-w-[150px]">
                <img src={fdnImg} alt="img" />
              </div>
            </div>
            <div className="w-[200px] max-[650px]:w-[130px] max-[650px]:min-w-[100px] min-w-[150px] max-[500px]:mx-auto bg-[#D9D9D9] p-3 rounded-[10px]">
              <img src={clans} alt="img" />
            </div>
          </div>
          <div
            ref={refTwo}
            className="flex flex-col items-start justify-between gap-[10px] max-w-[400px] max-[1200px]:max-w-[70%] max-[850px]:max-w-[90%] max-[850px]:w-[90%] max-[400px]:w-[100%]"
          >
            <FadeIn delay={0.2} inView={inViewTwo}>
              <Texts>
                We believe every idea is a gift from God, with the potential to grow and
                make a lasting impact.{' '}
              </Texts>
            </FadeIn>

            <FadeIn delay={0.5} inView={inViewTwo}>
              <Texts>
                Rooted in faith, trust, and collaboration, we are dedicated to helping
                individuals and ministries fulfill their God-given purpose. Together, we
                turn vision into reality, all for His glory.{' '}
              </Texts>
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-[150px] z-1">
        <img src={Star} alt="img" />
      </div>
    </div>
  );
};

export default OurFoundation;

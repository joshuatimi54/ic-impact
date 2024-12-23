import { useInView } from 'react-intersection-observer';
import Texts from '../Texts';
import FadeIn from '../animation/FadeIn';
import ButtonItem from '../button/Button';
import Pyramidic from '@/assets/pyramidic.webp';

const FirstStep = () => {
  const [refOne, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div>
      <div
        ref={refOne}
        className="min-[1800px]:max-w-[1400px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto flex max-[980px]:flex-col-reverse items-center justify-between gap-[20px] max-[980px]:mb-[50px]"
      >
        <div className="">
          <FadeIn up={false} inView={inView}>
            <div className="flex flex-col gap-4 items-start max-w-[500px]">
              <Texts>
                IC-IMPACT addresses some of the most critical challenges facing youth
                today, especially in Nigeria. Issues like unemployment, lack of direction,
                and the temptation of illegal pursuits often derail young people from
                realizing their true potential. This community offers a transformative
                solution, equipping you with spiritual resilience, practical skills, and
                financial knowledge to thrive and lead.{' '}
              </Texts>
              <Texts>
                By joining IC-IMPACT, you become part of a movement committed to raising a
                generation of leaders who are spiritually grounded, purpose-driven, and
                financially empowered to create positive change in their communities.
              </Texts>
            </div>
          </FadeIn>
          <ButtonItem className="max-[950px]:flex justify-center mx-auto mt-[30px]">
            Take the First Step
          </ButtonItem>
        </div>
        <div className="max-w-[500px]">
          <img src={Pyramidic} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default FirstStep;

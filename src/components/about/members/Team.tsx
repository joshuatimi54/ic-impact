import TeamMember from './TeamMember';
import Josh from '@/assets/Joshua.webp';
import Goodness from '@/assets/Goodness.webp';
import Chidi from '@/assets/Chidi.webp';
import Joy from '@/assets/Joy.webp';
import FadeIn from '@/components/animation/FadeIn';
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const [refOne, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div>
      <div
        ref={refOne}
        className="min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto flex max-[1100px]:flex-wrap min-[580px]:items-start max-[580px]:items-center justify-between gap-y-[30px] gap-x-[20px] max-[850px]:my-[50px]"
      >
        <FadeIn
          className="mx-auto"
          inView={inView}
          up
          upValue={40}
          opacity={false}
          delay={0.2}
        >
          <TeamMember
            image={Josh}
            imageAlt={`${Josh} Image`}
            memberName="Adesoba Joshua"
            memberPosition="Community Content Writer"
          />
        </FadeIn>
        <FadeIn
          className="mx-auto"
          inView={inView}
          up
          upValue={40}
          opacity={false}
          delay={0.5}
        >
          <TeamMember
            image={Goodness}
            imageAlt={`${Goodness} Image`}
            memberName="Adedokun Joy"
            memberPosition="Community Manager"
          />
        </FadeIn>
        <FadeIn
          className="mx-auto"
          inView={inView}
          up
          upValue={40}
          opacity={false}
          delay={0.8}
        >
          <TeamMember
            image={Joy}
            imageAlt={`${Joy} Image`}
            memberName="Adewusi Goodness"
            memberPosition="Community Brand Strategist"
          />
        </FadeIn>
        <FadeIn
          className="mx-auto"
          inView={inView}
          up
          upValue={50}
          opacity={false}
          delay={1.1}
        >
          <TeamMember
            image={Chidi}
            imageAlt={`${Chidi} Image`}
            memberName="Chidi Favour Martins"
            memberPosition="Community Content Writer"
          />
        </FadeIn>
      </div>
    </div>
  );
};

export default Team;

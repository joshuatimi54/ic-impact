import TeamMember from "./TeamMember";
import Josh from "@/assets/Joshua.png";
import Goodness from "@/assets/Goodness.png";
import Chidi from "@/assets/Chidi.png";
import Joy from "@/assets/Joy.png";
import FadeIn from "@/components/animation/FadeIn";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const [refOne, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div>
      <div
        ref={refOne}
        className="min-[1800px]:w-[1500px] max-[1800px]:w-[90%] mx-auto flex max-[1100px]:flex-wrap min-[580px]:items-start max-[580px]:items-center justify-between gap-y-[30px] gap-x-[20px] max-[850px]:my-[50px]"
      >
        <FadeIn inView={inView} up upValue={40} opacity={false} delay={0.2}>
          <TeamMember
            image={Josh}
            imageAlt={`${Josh} Image`}
            memberName="Adesoba Joshua"
            memberPosition="Community Content Writer"
          />
        </FadeIn>
        <FadeIn inView={inView} up upValue={40} opacity={false} delay={0.5}>
          <TeamMember
            image={Goodness}
            imageAlt={`${Goodness} Image`}
            memberName="Adewusi Goodness"
            memberPosition="Community Manager"
          />
        </FadeIn>
        <FadeIn inView={inView} up upValue={40} opacity={false} delay={0.8}>
          <TeamMember
            image={Joy}
            imageAlt={`${Joy} Image`}
            memberName="Adedokun Joy"
            memberPosition="Community Brand Strategist"
          />
        </FadeIn>
        <FadeIn inView={inView} up upValue={50} opacity={false} delay={1.1}>
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

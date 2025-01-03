import grouphug from '@/assets/group-hug.webp';
import Texts from '../Texts';
import ButtonItem from '../button/Button';
import BlurText from '../animation/BlurText';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import FadeInText from '../animation/FadeInText';

const Discover = () => {
  const [refOne, inViewOne] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  const [refTwo, inViewTwo] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div className="min-[1800px]:h-[70vh] min-[1100px]:h-screen max-[1110px]:min-h-screen relative z-1 flex flex-col items-center justify-center">
      <div className="min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] relative z-[1] flex max-[1100px]:flex-col items-start max-[1100px]:items-center justify-between gap-[30px] max-[1100px]:my-[60px]">
        <span className="bg-orangish absolute left-0 top-0 z-1 w-[40px] h-[40px] rounded-full"></span>
        <div className="max-w-[500px]">
          <img className=" rounded-tl-[50%]" src={grouphug} alt="img" />
        </div>
        <div
          ref={refOne}
          className="flex flex-col max-[1100px]:items-center max-[1100px]:text-center gap-[20px] max-w-[500px]"
        >
          <div ref={refTwo} className="">
            <span className="bg-cyanish text-[12px] text-white px-3 py-1 rounded-[10px] font-rozanovaThin ">
              ABOUT US{' '}
            </span>
            <h2 className="scroll-m-20 text-[40px] max-[600px]:text-[30px] leading-9 font-semibold tracking-tight mt-3 mb-4">
              <BlurText delay={0.2} inview={inViewOne}>
                Discover Our Mission
              </BlurText>
            </h2>
          </div>

          <Texts>
            <FadeInText delay={0.4} inView={inViewTwo}>
              At IC-IMPACT Community, we are a spirit-led network dedicated to bringing
              God-inspired ideas to life. Our mission is to empower individuals,
              ministries, and organizations to fulfill their divine purpose through
              strategic guidance, creative solutions, and impactful outreach.
            </FadeInText>
          </Texts>
          <Texts className="mt-3">
            <FadeInText delay={0.6} inView={inViewTwo}>
              With a foundation rooted in faith and a collaborative approach, we transform
              vision into reality. From prayerful brainstorming to Spirit-led execution,
              every step is crafted with care and excellence. Together, we can bring your
              God-given ideas to fruition and glorify His name through purposeful action.{' '}
            </FadeInText>
          </Texts>
          <ButtonItem className="bg-greenish mt-2 w-fit px-6 py-2">
            <Link to="/about">Get The Full Story </Link>
          </ButtonItem>
        </div>
      </div>
    </div>
  );
};

export default Discover;

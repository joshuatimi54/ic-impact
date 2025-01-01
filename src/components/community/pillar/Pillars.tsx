import FadeIn from '@/components/animation/FadeIn';
import Structure from './Structure';
import Texts from '@/components/Texts';
import { useInView } from 'react-intersection-observer';

const Pillars = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="min-h-[90vh] bg-greyish flex flex-col items-center justify-center gap-[60px]">
      <h2 className="scroll-m-20 font-rozanovaBold text-center font-bold tracking-tight text-black text-[40px] max-[950px]:text-[32px] max-[600px]:text-[28px] mt-[30px] max-[950px]:mt-[50px] pt-3 leading-[40px] max-[950px]:leading-[20px]">
        The Pillars of IC-IMPACT{' '}
      </h2>
      <div
        ref={ref}
        className="flex max-[950px]:flex-col items-start max-[950px]:items-center justify-between min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto max-[950px]:my-[0px] gap-[20px] max-[950px]:gap-[40px]"
      >
        <FadeIn inView={inView} delay={0.2}>
          <Structure>
            <div
              className={`w-[90%] mx-auto flex flex-col items-center justify-start gap-4 pt-[30px] pb-[40px]`}
            >
              <h3 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black bg-white text-[30px] pt-3 leading-[40px]">
                InnerCircle of Impact Community{' '}
              </h3>
              <Texts className={``}>
                This is an exclusive group of 20 individuals who receive one-on-one
                mentorship, intensive training, and financial support to grow their
                digital or physical businesses.
              </Texts>

              <Texts>
                We encourage all our citizens to aspire to join this selected few and take
                full advantage of the exceptional opportunities it offers.{' '}
              </Texts>
            </div>
          </Structure>
        </FadeIn>
        <FadeIn inView={inView} delay={0.5}>
          <Structure>
            <div
              className={`w-[90%] mx-auto flex flex-col justify-start gap-4 pt-[30px] pb-[40px]`}
            >
              <h3 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black bg-white text-start text-[30px] pt-3 leading-[40px]">
                Circle of Impact Community{' '}
              </h3>
              <Texts className={``}>
                A broader network of over 500 members united by a shared commitment to
                growth, excellence, and making a positive impact.
              </Texts>

              <Texts>
                Every member enjoys access to weekly training, resources, peer-to-peer
                support, and opportunities to collaborate, grow and excel.{' '}
              </Texts>
            </div>
          </Structure>
        </FadeIn>
      </div>
      <Texts
        variant="custom"
        className="max-[950px]:w-[80%] max-[600px]:w-[90%] mb-[50px] text-center text-[18px] font-sourceSansBold w-[50%] mt-[20px] max-[600px]:mt-0 mx-auto"
      >
        An environment where everyone is empowered to reach their full potential and
        contribute meaningfully to society.{' '}
      </Texts>
    </div>
  );
};

export default Pillars;

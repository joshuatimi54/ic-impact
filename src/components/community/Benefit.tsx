import Texts from '../Texts';
import listElipse from '@/assets/listEllipse.png';
import mixedPicture from '@/assets/mixedPicture.png';
import { useInView } from 'react-intersection-observer';
import FadeInText from '../animation/FadeInText';
import { motion } from 'framer-motion';

const Benefit = () => {
  const List = [
    {
      id: 1,
      benefit:
        'Access to weekly One-on-one mentorship on issues around Spiritual Growth, Purpose Discovery & Mind Training, and Financial Empowerment.',
    },
    {
      id: 2,
      benefit: 'Dedicated Accountability Partner.',
    },
    {
      id: 3,
      benefit: 'Free Training on any Digital Skills.',
    },
    {
      id: 4,
      benefit:
        'Networking and mentorship opportunities with professional thought Leaders.',
    },
    {
      id: 5,
      benefit:
        'Monthly rewards and incentives are available for those who actively engage and perform well.',
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="min-[1800px]:min-h-[60vh] max-[1800px]:min-h-[80vh] max-[980px]:min-h-[100vh] flex flex-col items-center justify-center gap-[60px]">
      <div className="flex max-[1060px]:flex-col items-start max-[950px]:items-center justify-between min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto my-[60px] max-[950px]:my-[0px] gap-[40px]">
        <div ref={ref} className="flex flex-col items-start gap-[30px] w-full">
          <h2 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black text-[40px] max-[950px]:text-[32px] max-[600px]:text-[28px] leading-[50px] max-[1060px]:mt-[50px]">
            <FadeInText delay={0.2} inView={inView}>
              The Benefit of Each Community{' '}
            </FadeInText>
          </h2>
          <motion.img
            initial={{
              clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            }}
            animate={{
              clipPath: inView
                ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                : 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            }}
            exit={{
              opacity: 0,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            }}
            transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
            className="min-w-[500px] max-[600px]:min-w-[250px] w-full "
            src={mixedPicture}
            alt="img"
          />
        </div>
        <div className="flex flex-col gap-[30px] max-[1060px]:gap-[20px] min-w-[400px] max-[500px]:min-w-[150px] max-[1060px]:mb-[70px]">
          <Texts className="w-[80%] max-[1200px]:w-[100%]">
            Each community offers unique benefits. Both are completely free to join,
            designed for different needs, and provide distinct opportunities for growth
            and development.{' '}
          </Texts>
          <h3 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black bg-white text-[22px] pt-3 max-[1060px]:leading-[20px] leading-[40px] max-[1060px]:leading-[20px] max-[600px]:leading-[35px]">
            INNER CIRCLE OF IMPACT COMMUNITY{' '}
          </h3>
          <ul className="w-[80%] max-[1200px]:w-[100%] flex flex-col gap-3 ">
            {List.map((item) => (
              <li className="flex items-start gap-3" key={item.id}>
                <img className="w-[20px]" src={listElipse} alt="img" />
                <Texts>{item.benefit} </Texts>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefit;

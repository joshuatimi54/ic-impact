import Texts from '../Texts';
import listElipse from '@/assets/listEllipse.png';
import groupSelfie from '@/assets/groupSelfie.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Circle = () => {
  const List = [
    {
      id: 1,
      benefit:
        'Weekly enlightenment online webinar on issues around spiritual growth, purpose discovery & mind training, and financial empowerment.',
    },
    {
      id: 2,
      benefit:
        'A support system where challenges are shared and successes are celebrated.',
    },
    {
      id: 3,
      benefit:
        'Build meaningful relationships with professionals and peers who can open doors to greater opportunities.',
    },
    {
      id: 4,
      benefit: 'Access to free resources on many digital skills.',
    },
    {
      id: 5,
      benefit:
        'Monthly rewards and incentives are available for those who actively engage and perform well.',
    },
    {
      id: 6,
      benefit:
        'Automatic qualification to Inner Circle of Impact Community for the top 5 most active Circle of Impact Community Citizens.',
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-[80vh] max-[980px]:min-h-[100vh] flex flex-col items-center justify-center gap-[60px]">
      <div
        id="circle"
        className="flex max-[1060px]:flex-col items-start max-[950px]:items-center justify-between min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto max-[950px]:my-[0px] gap-[40px]"
      >
        <div className="flex flex-col items-start gap-[30px] w-full">
          <img
            className="min-w-[500px] max-[600px]:min-w-[250px] w-full "
            src={groupSelfie}
            alt="img"
          />
        </div>
        <div
          ref={ref}
          className="flex flex-col gap-[30px] max-[1060px]:gap-[20px] min-w-[400px] max-[500px]:min-w-[150px] max-[1060px]:mb-[70px]"
        >
          <h3 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black bg-white text-[22px] pt-3 leading-[40px] max-[1060px]:leading-[20px] max-[600px]:leading-[35px] ">
            CIRCLE OF IMPACT COMMUNITY{' '}
          </h3>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="w-[95%] max-[1200px]:w-[100%] flex flex-col gap-3 "
          >
            {List.map((item, index: number) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <img className="w-[20px]" src={listElipse} alt="img" />
                <Texts>{item.benefit} </Texts>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Circle;

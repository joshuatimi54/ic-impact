import Texts from '../Texts';
import listElipse from '@/assets/citizenListImg.png';
import ManOnTab from '@/assets/manPressesTab.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FadeInText from '../animation/FadeInText';

const Citizen = () => {
  const List = [
    {
      id: 1,
      benefit:
        'Be a believer in Christ Jesus (you don’t have to be a Christian, but you must believe in the person of Christ Jesus, as our primary focus is Spiritual Growth).',
    },
    {
      id: 2,
      benefit: 'Be between the ages of 12 and 30.',
    },
    {
      id: 3,
      benefit:
        'Be passionate and committed to putting in the effort required for personal transformation.',
    },
    {
      id: 4,
      benefit: 'Have access to a mobile phone or computer with an internet connection.',
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
    <div className="min-[1800px]:min-h-[70vh] max-[1800px]:min-h-[100vh] bg-cyanish text-white max-[980px]:min-h-[100vh] flex flex-col items-center justify-center gap-[60px]">
      <div className="flex max-[1060px]:flex-col-reverse items-start max-[950px]:items-center justify-between min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto max-[950px]:my-[0px] gap-[40px]">
        <div ref={ref} className="flex flex-col gap-[30px] max-[1060px]:mb-[60px]">
          <h2 className="scroll-m-20 font-rozanovaBold text-white font-bold tracking-tight text-[40px] max-[950px]:text-[32px] max-[600px]:text-[28px] leading-[50px] max-[600px]:leading-[40px] max-[1060px]:mt-[10px] max-[600px]:mt-0">
            <FadeInText delay={0.2} inView={inView}>
              Who Can Become a Citizen of the IC-IMPACT Community
            </FadeInText>
          </h2>
          <Texts>
            We welcome everyone to join the IC-IMPACT Community, and it’s completely Free!{' '}
          </Texts>
          <Texts>
            <strong>We prioritize Quality people over Quantity </strong> in our admission
            process. To become a member of any IC-IMPACT community, here’s what you need
            to know.
          </Texts>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="w-[80%] max-[1200px]:w-[100%] flex flex-col gap-3 "
          >
            {List.map((item) => (
              <motion.li
                key={item.id}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <img className="w-[20px]" src={listElipse} alt="img" />
                <Texts>{item.benefit} </Texts>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div>
          <img
            className="min-w-[400px] max-[1060px]:w-[400px] max-[1060px]:mt-[60px] max-[600px]:min-w-[250px] w-full "
            src={ManOnTab}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Citizen;

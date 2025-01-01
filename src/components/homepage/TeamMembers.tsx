import Texts from '../Texts';
import ButtonItem from '../button/Button';
import Josh from '@/assets/josh.webp';
import manager from '@/assets/manager.webp';
import Shepherd from '@/assets/Jeph.webp';
import gooder from '@/assets/gooder.png';
import ShepherdStar from '@/assets/shepherdStar.webp';
import strategist from '@/assets/strategist.webp';
import Ellipse from '@/assets/Ellipse.webp';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const TeamMembers = () => {
  const [refOne, inViewOne] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="min-[850px]:h-[80vh] max-[850px]:min-h-[70vh] max-[430px]:min-h-[100vh] pb-[90px] bg-greyish flex flex-col items-center max-[850px]:items-start justify-center max-[850px]:justify-start ">
      <div className="min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto h-[80%]">
        <div className="flex flex-col">
          <h2 className="flex flex-col items-start gap-[3px] scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[30px] max-[850px]:mt-[40px] max-[850px]:mb-3">
            {' '}
            <span>Community</span>
            <span>Team Members</span>{' '}
          </h2>
          <div
            ref={refOne}
            className="flex max-[850px]:flex-col items-center max-[850px]:items-start justify-between gap-[30px] max-[850px]:gap-[100px] font-sourceSans"
          >
            <div className="flex flex-col gap-[20px]">
              <section className="flex flex-col gap-[20px] max-w-[500px] max-[980px]:max-w-[400px] max-[850px]:max-w-full">
                <Texts>
                  <strong>The IC-IMPACT Community team</strong>{' '}
                  <span>is a fervent and loyal group, committed to guiding and</span>{' '}
                  <strong> empowering every member. </strong>
                </Texts>
                <Texts>
                  With strong leadership and a focus on faith, purpose, and growth, our
                  team provides the mentorship, resources, and support needed for success.{' '}
                </Texts>
                <Texts>
                  Each member plays a key role in fostering transformation and helping you
                  become a leader of impact.{' '}
                </Texts>
              </section>
              <ButtonItem className="w-[150px] max-[850px]:mx-auto">
                Meet The Team{' '}
              </ButtonItem>
            </div>
            <div className="relative max-[850px]:mx-auto">
              <div className="bg-white w-[300px] h-[300px] rounded-full flex flex-col justify-center items-center">
                <img
                  src={Shepherd}
                  className="bg-greenish w-[200px] h-[200px] object-cover rounded-full"
                />
              </div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: inViewOne ? 1 : 0,
                  y: inViewOne ? 0 : 20,
                }}
                className="absolute left-[-40px] top-[-50px] z-[2]"
              >
                <div className="bg-yellowish relative overflow-hidden rounded-[10px] w-[120px] h-[140px]">
                  <img
                    className="w-full h-auto mt-6 relative z-[2]"
                    src={gooder}
                    alt="img"
                  />
                  <img
                    className="w-full h-auto absolute z-[1] top-[10px] right-[0px]"
                    src={ShepherdStar}
                    alt="img"
                  />
                  <span className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-[3] rounded-[15px] text-[12px] px-3">
                    Shepherd{' '}
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: inViewOne ? 1 : 0,
                  y: inViewOne ? 0 : 20,
                  transition: {
                    duration: 0.3,
                    delay: 0.5,
                  },
                }}
                className="absolute right-[-50px] top-[20px] max-[420px]:top-[-50px] max-[420px]:right-[-20px] z-[2]"
              >
                <div className="bg-orangish relative overflow-hidden rounded-[10px] w-[120px] h-[140px]">
                  <img className="w-full h-auto mt-4" src={manager} alt="img" />
                  <span className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-3 rounded-[15px] text-[12px] px-3">
                    Manager
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: inViewOne ? 1 : 0,
                  y: inViewOne ? 0 : 20,
                  transition: {
                    duration: 0.3,
                    delay: 1,
                  },
                }}
                className="absolute left-[-40px] top-[140px] z-[2] "
              >
                <div className="bg-cyanish relative overflow-hidden rounded-[10px] w-[120px] h-[140px]">
                  <img className="w-full h-auto mt-4" src={Josh} alt="img" />
                  <span className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-3 rounded-[15px] text-[12px] px-3">
                    Partner
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: inViewOne ? 1 : 0,
                  y: inViewOne ? 0 : 20,
                  transition: {
                    duration: 0.3,
                    delay: 1.5,
                  },
                }}
                className="absolute right-[-50px] bottom-[-50px] max-[420px]:right-[-20px] z-[2]"
              >
                <div className="bg-redish relative overflow-hidden rounded-[10px] w-[120px] h-[140px]">
                  <img
                    className="w-full h-auto relative z-10"
                    src={strategist}
                    alt="img"
                  />
                  <img
                    className="w-full h-auto absolute top-[0px] right-0 z-[1] "
                    src={Ellipse}
                    alt="img"
                  />
                  <span className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-3 rounded-[15px] text-[12px] px-3">
                    Strategist
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;

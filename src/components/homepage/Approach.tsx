import { useInView } from 'react-intersection-observer';
import Texts from '../Texts';
import ButtonItem from '../button/Button';
import dune from '@/assets/dune.webp';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Approach = () => {
  const [refOne, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      style={{
        backgroundImage: `url(${dune})`,
        backgroundPosition: 'center',
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="min-h-[100vh]"
    >
      <div className="min-[1800px]:w-[1200px] max-[1800px]:w-[90%] mx-auto">
        <div className="flex flex-col  gap-4 items-center text-center">
          <h1 className="scroll-m-20 mt-[80px] font-rozanovaBold font-bold tracking-tight text-[30px] leading-[10px]">
            Our Approach{' '}
          </h1>
          <Texts>The heartbeat of our success </Texts>
          <Texts className="max-w-[70%] max-[600px]:max-w-[100%]">
            We implement a deliberate and organized process that powers impactful outcomes
            and guarantees innovative results. By understanding the heart of your vision,
            aligning it with your core values, and crafting a customized plan, we turn
            your ideas into meaningful action.
          </Texts>
        </div>

        <div>
          <div
            style={{
              boxShadow: '0px 4px 4px 0px #00000040',
            }}
            className="max-w-[650px] bg-white mx-auto mt-[60px] pt-[30px] pb-[40px] rounded-[30px]"
          >
            {/* First Content Block */}
            <div
              ref={refOne}
              className="h-[150px] max-[540px]:h-[180px] mx-auto w-[90%]"
              role="region"
              aria-labelledby="understanding-your-vision"
            >
              <ol
                className="flex items-start gap-[20px] relative"
                aria-label="Understanding Your Vision Steps"
              >
                <li className="flex items-start gap-[20px]">
                  <div
                    className="bg-white relative w-[40px] min-w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-cyanish"
                    aria-hidden="true"
                  >
                    <div
                      className={`bg-cyanish relative w-[85%] h-[85%] rounded-full ${
                        inView ? 'fade-in' : ''
                      }`}
                    >
                      <motion.div
                        className="line-animation"
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{
                          duration: 1,
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <h2
                      id="understanding-your-vision"
                      className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[20px] max-[370px]:text-[16px] leading-[25px] mb-1"
                    >
                      Understanding Your Vision
                    </h2>
                    <p className="max-[370px]:text-[14px]">
                      We start by deeply exploring your goals, challenges, and
                      opportunities. This discovery phase helps us identify the core
                      elements that will guide the entire process and set a strong
                      foundation for success.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* //!Second Line */}
            <div
              className="h-[150px] max-[540px]:h-[190px] mx-auto max-[540px]:mt-4 w-[90%]"
              role="region"
              aria-labelledby="guide-by-purpose"
            >
              <ol
                className="flex items-start gap-[20px] relative"
                aria-label="Guide By Purpose Steps"
              >
                <li className="flex items-start gap-[20px]">
                  <div
                    className="bg-white relative w-[40px] min-w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-greenish"
                    aria-hidden="true"
                  >
                    <div
                      className={`${'bg-[#53961E]'} w-[85%] h-[85%] rounded-full`}
                    ></div>
                    <motion.div
                      className="secondLineAnimation"
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{
                        duration: 1,
                        delay: 1.4,
                      }} // Delay to match the first animation
                    />
                  </div>
                  <div>
                    <h2
                      id="guide-by-purpose"
                      className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[20px] max-[370px]:text-[16px] leading-[25px] mb-1"
                    >
                      Guide By Purpose
                    </h2>
                    <p className="max-[370px]:text-[14px]">
                      Our team works collaboratively to develop creative and effective
                      strategies. We evaluate multiple possibilities, ensuring we design a
                      tailored solution that aligns with your vision and maximizes its
                      potential.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Third Content Block */}
            <div
              className="h-[150px] max-[540px]:h-[190px] mx-auto w-[90%]"
              role="region"
              aria-labelledby="sustaining-impact"
            >
              <ol
                className="flex items-start gap-[20px] relative"
                aria-label="Sustaining Impact Steps"
              >
                <li className="flex items-start gap-[20px]">
                  <div
                    className="bg-white relative w-[40px] min-w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-yellowish"
                    aria-hidden="true"
                  >
                    <div className="bg-yellowish w-[85%] h-[85%] rounded-full"></div>
                    <motion.div
                      className="secondLineAnimation"
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{
                        duration: 1,
                        delay: 2.6,
                      }} // Delay to match the previous animations
                    />
                  </div>
                  <div>
                    <h2
                      id="sustaining-impact"
                      className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[20px] max-[370px]:text-[16px] leading-[25px] mb-1"
                    >
                      Sustaining Impact
                    </h2>
                    <p className="max-[370px]:text-[14px]">
                      Once the strategy is refined, we create a clear, actionable plan
                      with defined timelines, resources, and goals. This phase is all
                      about turning your idea into reality and ensuring everything runs
                      smoothly.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div
              className="h-[150px] max-[540px]:h-[190px] mx-auto w-[90%]"
              role="region"
              aria-labelledby="continuous-improvements"
            >
              <ol
                className="flex items-start gap-[20px] relative"
                aria-label="Continuous Improvements Steps"
              >
                <li className="flex items-start gap-[20px]">
                  <div
                    className="bg-white relative w-[40px] min-w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-redish"
                    aria-hidden="true"
                  >
                    <div className="bg-redish w-[85%] h-[85%] rounded-full"></div>
                  </div>
                  <div>
                    <h2
                      id="continuous-improvements"
                      className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[20px] max-[370px]:text-[16px] leading-[25px] mb-1"
                    >
                      Continuous Improvements
                    </h2>
                    <p className="max-[370px]:text-[14px]">
                      After execution, we continuously monitor progress and analyze
                      results. We adjust and refine the implementation, ensuring that your
                      project not only achieves its initial goals but is set up for
                      sustainable growth and success.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="pt-[30px] pb-[60px]">
          <ButtonItem className="flex justify-center mx-auto mt-[40px] w-[150px] py-2">
            <Link to="/community">Learn More </Link>
          </ButtonItem>
        </div>
      </div>
    </div>
  );
};

export default Approach;

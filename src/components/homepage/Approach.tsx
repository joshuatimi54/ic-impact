import { useInView } from "react-intersection-observer";
import Texts from "../Texts";
import ButtonItem from "../button/Button";
import dune from "@/assets/dune.png";
import { motion } from "framer-motion";

const Approach = () => {
  const [refOne, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      style={{
        backgroundImage: `url(${dune})`,
        backgroundPosition: "center",
        backgroundColor: "white",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-[100vh]"
    >
      <div className="min-[1800px]:w-[1500px] max-[1800px]:w-[90%] mx-auto">
        <div className="flex flex-col  gap-4 items-center text-center">
          <h1 className="scroll-m-20 mt-[80px] font-rozanovaBold font-bold tracking-tight text-[30px] leading-[10px]">
            Our Approach{" "}
          </h1>
          <Texts>The heartbeat of our success </Texts>
          <Texts className="max-w-[70%] max-[600px]:max-w-[100%]">
            We implement a deliberate and organized process that powers
            impactful outcomes and guarantees innovative results. By
            understanding the heart of your vision, aligning it with your core
            values, and crafting a customized plan, we turn your ideas into
            meaningful action.
          </Texts>
        </div>

        <div>
          <div
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
            className="max-w-[650px] bg-white mx-auto mt-[60px] pt-[30px] pb-[40px] rounded-[30px]"
          >
            {/* First Content Block */}
            <div
              ref={refOne}
              className="h-[150px] max-[540px]:h-[180px] mx-auto w-[90%]"
            >
              <ol className="flex items-start gap-[20px] relative">
                <div className="bg-white relative w-[40px] min-w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-cyanish">
                  <div
                    className={`bg-cyanish relative w-[85%] h-[85%] rounded-full ${
                      inView ? "fade-in" : ""
                    }`}
                  >
                    <motion.div
                      className="line-animation"
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{
                        duration: 1,
                      }}
                      // onAnimationStart={() => {
                      //   if (inView) {
                      //     setTimeout(() => {
                      //       setIsFirstAnimationComplete(true);
                      //     }, 1000);
                      //   }
                      // }}
                    />
                  </div>
                </div>
                <div>
                  <h2 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[20px] max-[370px]:text-[16px] leading-[25px] mb-1">
                    Understanding Your Vision{" "}
                  </h2>
                  <Texts className="max-[370px]:text-[14px]">
                    We start by deeply exploring your goals, challenges, and
                    opportunities. This discovery phase helps us identify the
                    core elements that will guide the entire process and set a
                    strong foundation for success.{" "}
                  </Texts>
                </div>
              </ol>
            </div>

            {/* //!Second Line */}
            <div className="h-[150px] max-[540px]:h-[190px] mx-auto max-[540px]:mt-4 w-[90%]">
              <ol className="flex items-start gap-[20px] relative">
                <div className="bg-white relative w-[40px] min-w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-greenish">
                  <div
                    className={`${"bg-[#53961E]"} w-[85%] h-[85%] rounded-full`}
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
                  <h2 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[20px] max-[370px]:text-[16px] leading-[25px] mb-1">
                    Guide By Purpose
                  </h2>
                  <Texts className="max-[370px]:text-[14px]">
                    Our team works collaboratively to develop creative and
                    effective strategies. We evaluate multiple possibilities,
                    ensuring we design a tailored solution that aligns with your
                    vision and maximizes its potential.
                  </Texts>
                </div>
              </ol>
            </div>

            {/* Third Content Block */}
            <div className="h-[150px] max-[540px]:h-[190px] mx-auto w-[90%]">
              <ol className="flex items-start gap-[20px] relative">
                <div className="bg-white relative w-[40px] min-w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-yellowish">
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
                  <h2 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[20px] max-[370px]:text-[16px] leading-[25px] mb-1">
                    Sustaining Impact
                  </h2>
                  <Texts className="max-[370px]:text-[14px]">
                    Once the strategy is refined, we create a clear, actionable
                    plan with defined timelines, resources, and goals. This
                    phase is all about turning your idea into reality and
                    ensuring everything runs smoothly.
                  </Texts>
                </div>
              </ol>
            </div>

            <div className="h-[150px]  max-[540px]:h-[190px] mx-auto w-[90%]">
              <ol className="flex items-start gap-[20px]  relative">
                <div className="bg-white relative w-[40px] min-w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-redish ">
                  <div className="bg-redish w-[85%] h-[85%] rounded-full"></div>
                </div>
                <div>
                  <h2 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[20px] max-[370px]:text-[16px] leading-[25px] mb-1">
                    Continuos Improvements
                  </h2>
                  <Texts className="max-[370px]:text-[14px] ">
                    After execution, we continuously monitor progress and
                    analyze results. We adjust and refine the implementation,
                    ensuring that your project not only achieves its initial
                    goals but is set up for sustainable growth and success.
                  </Texts>
                </div>
              </ol>
            </div>
          </div>
        </div>
        <div className="pt-[30px] pb-[60px]">
          <ButtonItem className="flex justify-center mx-auto mt-[40px] w-[150px] py-2">
            Learn More
          </ButtonItem>
        </div>
      </div>
    </div>
  );
};

export default Approach;

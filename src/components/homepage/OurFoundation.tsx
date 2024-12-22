import React from "react";
import fdnImg from "@/assets/foundation.png";
import clans from "@/assets/clan.png";
import Texts from "../Texts";
import BlurText from "../animation/BlurText";
import { useInView } from "react-intersection-observer";

const OurFoundation: React.FC = () => {
  const [refOne, inViewOne] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="h-[60vh] max-[480px]:h-[100vh] max-[1200px]:min-h-screen flex flex-col justify-center items-center bg-greyish">
      <div className="px-4 py-[30px] min-w-[400px] max-[500px]:min-w-[90%] min-[1800px]:w-[1500px] max-[1800px]:w-[90%] max-[1200px]:w-[60%] mx-auto h-[60%] max-[1200px]:h-auto bg-white rounded-[15px]">
        <div
          ref={refOne}
          className="flex max-[1200px]:flex-col max-[1200px]:items-center justify-between gap-4 max-[1200px]:gap-[30px] mx-auto w-[95%] h-[100%]"
        >
          <div className="flex flex-col items-start justify-between gap-[20px] h-[100%]">
            <h2 className="scroll-m-20 text-[35px] font-semibold tracking-tight first:mt-0">
              <BlurText inview={inViewOne}>Our Foundation</BlurText>
            </h2>
            <div className="w-[250px]">
              <img src={fdnImg} alt="img" />
            </div>
          </div>
          <div className="w-[200px] bg-[#D9D9D9] p-3 rounded-[10px]">
            <img src={clans} alt="img" />
          </div>
          <div className="flex flex-col items-start justify-between gap-[10px] max-w-[400px]">
            <Texts>
              We believe every idea is a gift from God, with the potential to
              grow and make a lasting impact.{" "}
            </Texts>
            <Texts>
              Rooted in faith, trust, and collaboration, we are dedicated to
              helping individuals and ministries fulfill their God-given
              purpose. Together, we turn vision into reality, all for His glory.{" "}
            </Texts>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFoundation;

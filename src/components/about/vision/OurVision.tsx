import { useInView } from "react-intersection-observer";
import Vision from "./Vision";
import Texts from "@/components/Texts";
import FadeIn from "@/components/animation/FadeIn";

const OurVision = () => {
  const [refOne, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div
      ref={refOne}
      className="min-h-[80vh] bg-greyish flex flex-col items-center justify-center"
    >
      <div className="flex max-[950px]:flex-col items-start max-[950px]:items-center justify-between min-[1800px]:w-[1500px] max-[1800px]:w-[90%] mx-auto max-[950px]:my-[50px] gap-[20px]">
        <FadeIn inView={inView} up={true}>
          <Vision
            heading="Our VISION"
            text={
              <Texts>
                <strong>IC-IMPACT </strong>
                <span>
                  {" "}
                  is more than just a mentoorship platform it's a transformative
                  haven
                </span>
              </Texts>
            }
            subText={
              <Texts>
                <span>Our mission is to </span>
                <strong>guide young people, especially in Nigeria, </strong>
                <span>
                  {" "}
                  to uncover their hidden potential and channel it for Spiritual
                  Growth, Personal Achievement, and Societal Transformation.{" "}
                </span>
              </Texts>
            }
            conclude={
              <Texts>
                <span>Together, we create lasting </span>
                <strong>impact</strong>
              </Texts>
            }
            bgColor="cyanish"
          />
        </FadeIn>

        {/* Mission */}
        <FadeIn inView={inView} up={true} delay={0.5}>
          <Vision
            heading="Our MISSION"
            text={
              <Texts>
                <span>
                  With a focus on Spiritual Growth, Purpose Discovery, and
                  Financial Empowerment.
                </span>
              </Texts>
            }
            subText={
              <Texts>
                <span>
                  Our mission is to raise a generation of young leaders
                  empowered and equipped to create positive change in the world
                  around them.
                </span>
              </Texts>
            }
            conclude={
              <Texts className="text-white">
                <span>Together, we create lasting </span>
                <strong>impact</strong>
              </Texts>
            }
            bgColor="yellowish"
          />
        </FadeIn>
      </div>
    </div>
  );
};

export default OurVision;

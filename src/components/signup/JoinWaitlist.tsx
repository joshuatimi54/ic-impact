import Texts from "../Texts";
import FadeInText from "../animation/FadeInText";
import ButtonItem from "../button/Button";
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";


const Joinwaitlist = () => {
    const [refOne, inViewOne] = useInView({
        threshold: 0.3,
        triggerOnce: false,
      });
      

    return (
        <div className="m-auto mb-16 p-12 rounded-xl border-2 w-fit relative z-1 flex flex-col items-center justify-center">
            <div 
                ref={refOne}
                className="flex"
            >
                <Texts>
                    <FadeInText delay={0.4} inView={inViewOne}>
                    Admission into IC-IMPACT COMMUNITY is currently on hold till the month of MAY, 
                    but you can join our waitlist here
                    </FadeInText>
                </Texts>
            </div>
            <div>
                <ButtonItem className="mt-3">
                    <Link to="https://wa.link/brincw"> Join Wait List </Link>
                </ButtonItem>
            </div>
        </div>
    );
};

export default Joinwaitlist;
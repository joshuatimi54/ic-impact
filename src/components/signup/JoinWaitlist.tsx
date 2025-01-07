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
        <div className="m-auto p-12 rounded-xl border-2 w-fit relative z-1 flex flex-col items-center justify-center">
            <div 
                ref={refOne}
                className="flex"
            >
                <Texts>
                    <FadeInText delay={0.4} inView={inViewOne}>
                    Thanks for Showing your Readiness to join IC-IMPACT COMMUNITY, 
                    the Admission form will be open for all applicants by January 11 2025.
                    </FadeInText>
                </Texts>
            </div>
            <div>
                <ButtonItem className="mt-3">
                    <Link to="https://tinyurl.com/ICI-website-leads" target="_blank"> Join the Wait List </Link>
                </ButtonItem>
            </div>
        </div>
    );
};

export default Joinwaitlist;
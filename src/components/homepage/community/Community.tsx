import React from 'react';
import Structure from './Structure';
import Star from '@/assets/communityStar.webp';
import stick from '@/assets/stick.webp';
import { useInView } from 'react-intersection-observer';
import BlurText from '@/components/animation/BlurText';

const Community: React.FC = () => {
  const [refOne, inViewOne] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  return (
    <div className="min-[1100px]:h-screen max-[1100px]:min-h-screen min-[1800px]:max-w-[1400px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto mb-[50px]">
      <div ref={refOne}>
        <h2 className="text-[35px] max-[600px]:text-[24px] font-rozanovaThin font-extrabold">
          <BlurText inview={inViewOne}>IC-IMPACT Community </BlurText>
        </h2>
        <p className="font-sourceSansItalic text-[18px]">As far as your eye can see </p>
      </div>
      <div className="flex max-[1100px]:flex-col items-start max-[1100px]:items-center max-[1100px]:my-[60px] justify-between gap-[20px] max-[1100px]:gap-[30px] min-[1100px]:mt-[30px] max-[1100px]:mt-[20px]">
        <Structure
          heading="Inner-Circle Of IMPACT Community"
          image={Star}
          text="At IC-IMPACT, we are passionate about supporting individuals committed to growth and empowerment. Our InnerCircle of Impact is a select group of 20 members who receive personalized mentorship, intensive training, and financial support to grow their businesses. This exclusive circle is highly competitive, and we encourage all members to strive for a place among these top achievers."
          bgColor="orangish"
          style="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[200px]"
        />
        <Structure
          heading="Circle Of IMPACT Community"
          image={stick}
          text="At the Circle of Impact Community, we are focused on empowering individuals who are determined to grow and make a difference. Our community provides over 500 members with access to weekly training, valuable resources, and opportunities for success. We are committed to fostering a space for growth."
          bgColor="redish"
          style="absolute z-[1] top-1/2 left-[0px] transform  -translate-y-1/2 max-w-[150px]"
        />
      </div>
    </div>
  );
};

export default Community;

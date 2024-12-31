import React from 'react';
import Structure from './Structure';
import Texts from '@/components/Texts';
import listElipse from '@/assets/listEllipse.png';
import ButtonItem from '@/components/button/Button';
import { Link} from 'react-router-dom';

const Requirements: React.FC = () => {
  const List = [
    {
      id: 1,
      benefit: 'Be between the ages of 12 and 25',
    },
    {
      id: 2,
      benefit: 'Complete the Community Sign-Up form with all honesty',
    },
  ];

  return (
    <div className="min-h-[100vh] max-[980px]:min-h-[100vh] flex flex-col items-center justify-center gap-[60px]">
      <div className="flex flex-col items-center min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto max-[950px]:my-[0px] gap-[20px] max-[950px]:gap-[40px]">
        <h2 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black text-center text-[40px] max-[950px]:text-[32px] max-[600px]:text-[28px] leading-[50px] max-[600px]:leading-[40px] mb-[30px] max-[600px]:mb-[0px] mt-[50px]">
          Inner - Circle Of Impact Community Citizenship Requirements
        </h2>
        <Structure>
          <div className="flex flex-col gap-[20px] w-[90%] mx-auto py-[30px]">
            <Texts>
              Please note that membership in this community is based on a manual review of
              all applicants' form submissions. The IC-IMPACT Community Team will assess
              all applications and select those who we believe would benefit most from our
              support.
            </Texts>
            <Texts>
              <strong>
                In addition to meeting the general requirements, applicants must:
              </strong>
            </Texts>
            <ul className="w-[80%] max-[1200px]:w-[100%] flex flex-col gap-3 ">
              {List.map((item) => (
                <li className="flex items-start gap-3" key={item.id}>
                  <img className="w-[20px]" src={listElipse} alt="img" />
                  <Texts>{item.benefit} </Texts>
                </li>
              ))}
            </ul>
          </div>
        </Structure>
        <div className="mx-auto mb-[20px]">
          <h2 className="w-[90%] max-[600px]:w-full mx-auto scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black text-center text-[40px] max-[950px]:text-[32px] max-[600px]:text-[24px] max-[600px]:leading-[40px] mb-[30px] max-[600px]:mb-[30px] mt-[50px]  max-[600px]:mt-[10px]">
            Circle Of Impact Community Citizenship Requirements
          </h2>
          <div className="flex flex-col justify-center items-center mx-auto">
            <Structure>
              <div className="w-[90%] mx-auto py-[30px]">
                There are no additional requirements to join the Circle of Impact
                Community. As long as you meet the general community criteria and complete
                the application form, you are automatically eligible to become a part of
                this community.
              </div>
            </Structure>
          </div>
          <div className="flex justify-center mx-auto my-[60px]">
            <ButtonItem className="">
              <Link to='/signup' >Join The Circle Now </Link>
               </ButtonItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;

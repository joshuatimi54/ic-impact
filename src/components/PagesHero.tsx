import React from 'react';
import Texts from './Texts';
import ButtonItem from './button/Button';
import AboutHeroImg from '@/assets/aboutHeroImg.png';
import aboutEllipse from '@/assets/blackElipse.png';
import CommunitySmilingGuy from '@/assets/guySmiling.png';
import blackLady from '@/assets/blackLady.png';
import fineWoman from '@/assets/fineWoman.png';
import blackMan from '@/assets/blackMan.png';
import modelWoman from '@/assets/modelWoamn.png';

type IProps = {
  bgImage?: string;
  header?: string;
  headerStyle?: string;
  subHeader?: string;
  subText?: string;
  mainConStyle?: string;
  subConStyle?: string;
  subConHeaderStyle?: string;
  bodyImg?: string;
  bodyImgStyle?: string;
  btnTxt?: string;
  showAboutHeroImg?: boolean;
  showCommunityHeroImg?: boolean;
};

const PagesHero: React.FC<IProps> = ({
  bgImage,
  header,
  headerStyle,
  subHeader,
  subText,
  mainConStyle,
  subConHeaderStyle,
  subConStyle,
  bodyImg,
  bodyImgStyle,
  btnTxt,
  showAboutHeroImg,
  showCommunityHeroImg = false,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className={`relative flex flex-col items-center justify-center ${mainConStyle}`}
    >
      <div className={`relative z-[2] flex flex-col justify-center items-center`}>
        {bodyImg && (
          <div className={bodyImgStyle}>
            <img src={bodyImg} alt="img" />
          </div>
        )}
        <h1 className={`scroll-m-20 font-rozanovaBold tracking-tight ${headerStyle}`}>
          {header}
        </h1>
        {subHeader && (
          <Texts className={`text-black text-center ${subConHeaderStyle}`}>
            {subHeader}{' '}
          </Texts>
        )}
        {showCommunityHeroImg && (
          <div className="absolute z-[4] left-[100px] top-[-60px] w-[45px] border-2 border-orangish rounded-full">
            <img src={blackMan} alt="img" />
          </div>
        )}
        {showCommunityHeroImg && (
          <div className="absolute z-[4] left-[-150px] max-[900px]:left-[-80px] max-[750px]:left-[0] max-[480px]:left-[-30px] top-1/3 max-[750px]:top-[5%] w-[45px] border-2 border-greenish rounded-full">
            <img src={blackLady} alt="img" />
          </div>
        )}
        {showCommunityHeroImg && (
          <div className="absolute z-[4] right-[-150px] max-[900px]:right-[-80px] max-[750px]:right-[0] max-[480px]:right-[-30px] top-[-10px] w-[45px] border-2 border-yellowish rounded-full">
            <img src={CommunitySmilingGuy} alt="img" />
          </div>
        )}
        {showCommunityHeroImg && (
          <div className="absolute z-[4] left-[60px] bottom-[-100px] max-[750px]:bottom-[-80px] w-[45px] border-2 border-redish rounded-full">
            <img src={modelWoman} alt="img" />
          </div>
        )}
        {showCommunityHeroImg && (
          <div className="absolute z-[4] min-[1200px]:right-[-250px] max-[1200px]:right-[-150px] max-[900px]:right-[-80px] max-[750px]:right-[0] bottom-[-100px] max-[750px]:bottom-[-80px] w-[45px] border border-orangish rounded-full">
            <img src={fineWoman} alt="img" />
          </div>
        )}
        {subText && <Texts className={`text-center ${subConStyle}`}>{subText}</Texts>}
        {btnTxt && <ButtonItem className="mt-4">{btnTxt}</ButtonItem>}
      </div>
      {showAboutHeroImg && (
        <div className="absolute z-[1] w-[60%] max-[1100px]:w-[80%] max-[750px]:w-[90%] min-w-[500px] max-[600px]:hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  mt-[40px]">
          <img src={AboutHeroImg} alt="img" />
          <img
            className="absolute left-[-100px] top-[-70px] z-[-2] w-[200px] max-[600px]:hidden "
            src={aboutEllipse}
            alt="img"
          />
        </div>
      )}
    </div>
  );
};

export default PagesHero;

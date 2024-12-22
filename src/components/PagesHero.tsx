import React from "react";
import Texts from "./Texts";
import ButtonItem from "./button/Button";

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
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`flex flex-col items-center justify-center ${mainConStyle}`}
    >
      <div className={`flex flex-col justify-center items-center`}>
        {bodyImg && (
          <div className={bodyImgStyle}>
            <img src={bodyImg} alt="img" />
          </div>
        )}
        <h1
          className={`scroll-m-20 font-rozanovaBold tracking-tight ${headerStyle}`}
        >
          {header}
        </h1>
        {subHeader && (
          <Texts className={`text-black text-center ${subConHeaderStyle}`}>
            {subHeader}{" "}
          </Texts>
        )}
        {subText && (
          <Texts className={`text-center ${subConStyle}`}>{subText}</Texts>
        )}
        {btnTxt && <ButtonItem className="mt-4">{btnTxt}</ButtonItem>}
      </div>
    </div>
  );
};

export default PagesHero;

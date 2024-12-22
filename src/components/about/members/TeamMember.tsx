import Texts from "@/components/Texts";
import React from "react";

type IProps = {
  image: string;
  imageAlt: string;
  memberName: string;
  memberPosition: string;
};

const TeamMember: React.FC<IProps> = ({
  image,
  imageAlt,
  memberName,
  memberPosition,
}) => {
  return (
    <div className="min-[1100px]:min-h-[80vh] max-[950px]:min-h-auto max-[580px]:mx-auto flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 max-w-[300px]  ">
        <div className="h-[300px] w-[250px]">
          <img
            className="w-full h-full object-cover rounded-[10px]"
            src={image}
            alt={imageAlt}
          />
        </div>
        <div
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="flex flex-col items-center gap-1 text-center rounded-md bg-white"
        >
          <Texts>{memberName} </Texts>
          <Texts>{memberPosition} </Texts>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

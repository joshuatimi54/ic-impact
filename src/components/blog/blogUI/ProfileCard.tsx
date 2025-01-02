import Texts from '@/components/Texts';
import { Check, Ellipsis } from 'lucide-react';
import React from 'react';

type Props = {
  authorsPicture?: string;
  authorsName?: string;
  publishedTime?: string;
  postAction?: string;
  estimatedTimeToRead?: string;
};

const ProfileCard: React.FC<Props> = ({
  authorsPicture,
  authorsName,
  //   publishedTime,
  postAction,
  estimatedTimeToRead,
}) => {
  return (
    <div className="flex items-start justify-between mb-8 rounded-md w-full">
      <div className="flex flex-col items-center justify-center text-center bg-white ">
        <div className="flex items-start gap-1 ">
          <img
            className="rounded-full w-[60px] h-[60px] max-[450px]:w-[40px] max-[450px]:h-[40px] object-cover"
            src={authorsPicture}
            alt="profile picture"
          />
          <div className="flex flex-col items-start space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div className="flex items-center gap-1">
              <Texts>
                <strong> {authorsName}</strong>
              </Texts>
              <span className="bg-cyanish rounded-[6px] text-white p-1">
                {<Check size={14} />}{' '}
              </span>
              <Texts className="max-[450px]:text-[12px]">{postAction}</Texts>
            </div>
            <Texts className="text-sm text-gray-500 dark:text-gray-400 ">
              {estimatedTimeToRead}
            </Texts>
          </div>
        </div>
      </div>
      <Texts>
        <span>{<Ellipsis />} </span>
      </Texts>
    </div>
  );
};

export default ProfileCard;

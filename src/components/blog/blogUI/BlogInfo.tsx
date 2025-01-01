import React, { useState } from 'react';
import { Likes } from './BlogCard';
import Texts from '@/components/Texts';

type IProps = {
  content: string | '';
  postPicture?: string;
  postVideos?: string;
  postLikes?: Likes[];
  postTags?: string[];
};

const BlogInfo: React.FC<IProps> = ({
  content,
  postPicture,
  postVideos,
  // postLikes,
  postTags,
}) => {
  const [readMore, setReadMore] = useState(300);

  return (
    <div>
      {
        <div>
          <Texts className="text-gray-500">
            "{content?.slice(0, readMore)}...
            {readMore === 300 ? (
              <span
                onClick={() => setReadMore(content?.length)}
                className="text-cyanish cursor-pointer"
              >
                Read More
              </span>
            ) : (
              <span
                onClick={() => setReadMore(300)}
                className="text-cyanish cursor-pointer"
              >
                Read Less
              </span>
            )}
            "{' '}
          </Texts>
          <p className="text-cyanish mt-1 mb-[30px]">
            {postTags?.map((tag, index) => (
              <span key={index}>{tag} </span>
            ))}{' '}
          </p>
          {postPicture && (
            <div>
              <img
                className="w-full h-[500px] object-cover object-center"
                src={postPicture}
                alt="img"
              />
            </div>
          )}
          <div>{postVideos && <video src={postVideos}></video>}</div>
        </div>
      }
    </div>
  );
};

export default BlogInfo;

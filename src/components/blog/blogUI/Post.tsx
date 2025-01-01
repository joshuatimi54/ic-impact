import React from 'react';
import { Blog } from './BlogCard';
import ProfileCard from './ProfileCard';
import BlogInfo from './BlogInfo';
import BlogInteractions from '../BlogInteractions';
import Structure from './Structure';
import ShowLikes from './ShowLikes';

type Props = {
  post: Blog;
};

const Post: React.FC<Props> = ({ post }) => {
  const handleLike = () => {};
  const handleComment = () => {};

  return (
    <Structure>
      <div className="w-[95%] py-[40px] mx-auto">
        <ProfileCard
          authorsPicture={post.authorPicture}
          authorsName={post.authorName}
          publishedTime={post.publishDate}
          postAction={post.postAction}
          estimatedTimeToRead={post.estimatedTimeToRead}
        />
        <BlogInfo
          content={post.shortDescription!}
          postPicture={post.cover}
          postVideos={post.videos}
          postLikes={post.likes}
          postTags={post.tags}
        />
        <ShowLikes />
        <BlogInteractions handleLike={handleLike} handleComment={handleComment} />
      </div>
    </Structure>
  );
};

export default Post;

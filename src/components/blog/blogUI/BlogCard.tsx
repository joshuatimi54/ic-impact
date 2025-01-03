import React from 'react';
import Post from './Post';

export interface Blog {
  id?: number;
  title?: string;
  shortDescription?: string;
  cover?: string;
  slug?: string;
  authorName?: string;
  authorPicture?: string;
  publishDate?: string;
  estimatedTimeToRead?: string;
  postAction?: string;
  pictures?: string;
  videos?: string;
  likes?: Likes[];
  tags?: string[];
}

export interface Likes {
  name: string;
  avatars: string;
}

const BlogCard: React.FC = () => {
  const posts: Blog[] = [
    {
      id: 1,
      title: 'React Tailwind Newsletter Component',
      shortDescription:
        'Learn how to build a responsive newsletter component using React and Tailwind CSS.',
      cover:
        'https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'react-tailwind-newsletter-component',
      publishDate: '2024-07-14',
      estimatedTimeToRead: '5 min read',
      postAction: 'Added a new post',
      authorName: 'Kaladin Reborn',
      authorPicture:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
      tags: ['#Travel', '#Family', '#Books', '#Culture', '#Life'],
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      shortDescription:
        'Deep dive into closures, prototypes, and asynchronous programming in JavaScript.',
      cover:
        'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'advanced-javascript-concepts',
      publishDate: '2024-05-25',
      postAction: 'Updated new post',
      estimatedTimeToRead: '10 min read',
      authorName: 'Dashner Black',
      authorPicture:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
      tags: ['#Travel', '#Family', '#Books', '#Culture', '#Life'],
    },
    {
      id: 3,
      title: 'Introduction to TypeScript',
      shortDescription:
        'An introductory guide to TypeScript, covering the basics and helping you get started with typed JavaScript.',
      cover:
        'https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'introduction-to-typescript',
      publishDate: '2024-02-10',
      postAction: 'Added post',
      estimatedTimeToRead: '7 min read',
      authorName: 'Sarah White',
      authorPicture:
        'https://i.pinimg.com/564x/33/f4/d8/33f4d8c6de4d69b21652512cbc30bb05.jpg',
      tags: ['#Travel', '#Family', '#Books', '#Culture', '#Life'],
    },
    {
      id: 4,
      title: 'Building a REST API with Node.js',
      shortDescription:
        'Step-by-step guide to creating a RESTful API using Node.js and Express.',
      cover:
        'https://images.unsplash.com/photo-1560732488-6b0df240254a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'building-a-rest-api-with-node-js',
      publishDate: '2024-04-15',
      postAction: 'Added post',
      authorName: 'Reddington Greenland',
      estimatedTimeToRead: '12 min read',
      authorPicture:
        'https://i.pinimg.com/564x/33/f4/d8/33f4d8c6de4d69b21652512cbc30bb05.jpg',
      tags: ['#Finance', '#Family', '#Books', '#Culture', '#Life'],
    },
    {
      id: 5,
      title: 'CSS Grid Layout: A Complete Guide',
      shortDescription:
        'Master CSS Grid Layout with this comprehensive guide covering all the essentials and advanced techniques.',
      cover:
        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'css-grid-layout-complete-guide',
      publishDate: '2024-03-20',
      postAction: 'Posted Update',
      authorName: 'Victor Roque',
      estimatedTimeToRead: '15 min read',
      authorPicture:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
      tags: ['#Happiness', '#Family', '#Books', '#Culture', '#Life'],
    },
    {
      id: 6,
      title: 'Getting Started with Next.js',
      shortDescription:
        'A beginner’s guide to building server-rendered React applications with Next.js.',
      cover:
        'https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'getting-started-with-next-js',
      publishDate: '2024-06-10',
      authorName: 'Elizabeth Vermonth',
      estimatedTimeToRead: '8 min read',
      postAction: 'Added post',

      authorPicture:
        'https://i.pinimg.com/564x/33/f4/d8/33f4d8c6de4d69b21652512cbc30bb05.jpg',
      tags: ['#Business', '#Living', '#Books', '#Culture', '#Life'],
    },
  ];

  return (
    <div className="flex flex-col gap-y-[40px]">
      <div className="flex flex-col items-center max-[950px]:items-center justify-center min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] max-[450px]:w-[100%] mx-auto max-[950px]:my-[0px] gap-[40px] my-[80px]">
        <div className="flex flex-col gap-[20px] w-[95%] mx-auto">
          {posts.map((post) => (
            <div key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

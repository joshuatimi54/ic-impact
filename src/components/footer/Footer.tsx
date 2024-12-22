import logo from '@/assets/logo.png';
import Texts from '../Texts';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  const community = [
    {
      id: 1,
      title: 'Vision',
    },
    {
      id: 2,
      title: 'Mission',
    },
    {
      id: 3,
      title: 'Circle of Impact',
    },
    {
      id: 4,
      title: 'Inner-Circle of Impact',
    },
  ];

  const pages = [
    {
      id: 1,
      page: 'Home',
      path: '/',
    },
    {
      id: 2,
      page: 'About',
      path: '/about',
    },
    {
      id: 3,
      page: 'Community',
      path: '/community',
    },
    {
      id: 4,
      page: 'Contact',
      path: '/contact',
    },
    {
      id: 5,
      page: 'Blog',
      path: '/blog',
    },
  ];
  return (
    <div className="bg-[#1C1C1C] flex flex-col items-center justify-center min-h-[60vh] py-[40px] text-white">
      <div className="flex flex-col gap-[30px] min-[1800px]:w-[1500px] max-[1800px]:w-[90%]  h-[80%] mx-auto">
        <div className="flex flex-wrap items-start justify-between gap-[30px]">
          <div className="flex flex-col items-start gap-4">
            <div className="w-[100px]">
              <img src={logo} alt="img" />
            </div>
            <Texts className="max-w-[300px]">
              {' '}
              Learn about our mission to inspire, empower, and equip young individuals for
              spiritual growth, personal success, and societal transformation
            </Texts>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="scroll-m-20 font-sourceSans font-bold tracking-tight text-[20px]">
              Community{' '}
            </h2>
            <ul>
              {community.map((res) => (
                <li key={res.id}>
                  <span>{res?.title} </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="scroll-m-20 font-sourceSans font-bold tracking-tight text-[20px]">
              Contact{' '}
            </h2>
            <ul className="flex flex-col gap-2">
              <li className=" flex items-center gap-[7px]">
                <span className="pt-1">{<Mail size={16} />} </span>
                <a href="mailto:Support@ic-impact.com">Support@ic-impact.com </a>
              </li>
              <li className=" flex items-center gap-[7px]">
                <span className="">{<Phone size={16} />} </span>
                <span>+234 1234 6789 </span>{' '}
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="scroll-m-20 font-sourceSans font-bold tracking-tight text-[20px]">
              Pages
            </h2>
            <ul className="flex flex-col items-start ga">
              {pages.map((page) => (
                <li key={page.id}>
                  <Link to={page.path}>{page.page}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="scroll-m-20 font-sourceSans font-bold tracking-tight text-[20px]">
              Socials
            </h2>
            <ul className="flex items-start gap-4">
              <li className="p-2 bg-[#E4E4E4] text-black rounded-md">
                {<MdOutlineWhatsapp />}{' '}
              </li>
              <li className="p-2 bg-[#E4E4E4] text-black rounded-md">
                {<FaFacebook />}{' '}
              </li>
              <li className="p-2 bg-[#E4E4E4] text-black rounded-md">
                {<FaInstagram />}{' '}
              </li>
              <li className="p-2 bg-[#E4E4E4] text-black rounded-md">{<FaTiktok />} </li>
            </ul>
          </div>
        </div>
        <div className="bg-white h-[1px] w-[100%] "></div>
        <div className="text-center">
          <Texts>© 2024 IC-IMPACT. All Rights Reserved </Texts>
        </div>
      </div>
    </div>
  );
};

export default Footer;

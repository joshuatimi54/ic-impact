import logo from '@/assets/logo.webp';
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
      path: '/community',
    },
    {
      id: 2,
      title: 'Mission',
      path: '/community',
    },
    {
      id: 3,
      title: 'Circle of Impact',
      path: '/community',
    },
    {
      id: 4,
      title: 'Inner-Circle of Impact',
      path: '/community',
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
      <div className="flex flex-col gap-[30px] min-[1800px]:max-w-[1400px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] h-[80%] mx-auto">
        <div className="flex flex-wrap items-start justify-between gap-[30px]">
          <div className="flex flex-col items-start gap-4">
            <div className="w-[100px]">
              <Link to="/">
                <img src={logo} alt="img" />
              </Link>
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
                  <Link to={res.path}>{res.title}</Link>
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
                <a href="mailto:Support@ic-impact.com" rel="noopener noreferrer">
                  Support@ic-impact.com{' '}
                </a>
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
                <a
                  href="https://bit.ly/icimpactcommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<MdOutlineWhatsapp />}{' '}
                </a>
              </li>
              <li className="p-2 bg-[#E4E4E4] text-black rounded-md">
                <a
                  href="https://www.facebook.com/ic.impactcommunity?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<FaFacebook />}{' '}
                </a>
              </li>
              <li className="p-2 bg-[#E4E4E4] text-black rounded-md">
                <a
                  href="https://www.instagram.com/ic_impactcommunity/profilecard/?igsh=MXE5N3NoNWJqZTgzNg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<FaInstagram />}{' '}
                </a>
              </li>
              <li className="p-2 bg-[#E4E4E4] text-black rounded-md">
                <a
                  href="https://www.tiktok.com/@tomiwa_jeph?_t=8sROCozm33l&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  {<FaTiktok />}{' '}
                </a>
              </li>
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

import React, {useEffect, useState } from 'react';
import ButtonItem from '../button/Button';
import Logo from '@/assets/logo.webp';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
const Navbar: React.FC = () => {
  const navItem = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'About',
      path: '/about',
    },
    {
      id: 3,
      name: 'Community',
      path: '/community',
    },
    {
      id: 4,
      name: 'Contact',
      path: '/contact',
    },
    {
      id: 5,
      name: 'Blog',
      path: '/blog',
    },
  ];

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const router = useLocation();

useEffect(() => {
setIsOpened(false)
},[router.pathname])

  return (
    <nav>
      <div className="bg-white fixed top-0 inset-x-0 z-[99] w-full">
        <div className="min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto bg-white">
          <div className="flex items-center justify-between gap-4 py-3">
            <div>
              <Link to="/">
                <img className='max-[1800px]:max-w-[150px] min-[1800px]:max-w-[200px]' src={Logo} alt="img" />
              </Link>
            </div>
            <ul className="flex items-center justify-between gap-[30px] font-rozanovaBold max-[900px]:hidden">
              {navItem.map((item) => (
                <li className="relative cursor-pointer group inline-block" key={item.id}>
                  <Link
                    className={`${
                      router?.pathname === item.path ? 'border-b-2 border-orangish' : ''
                    }`}
                    to={item?.path}
                  >
                    {item?.name}
                  </Link>
                  <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-orangish scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
                </li>
              ))}
            </ul>
            <Link to="/signup">
              <ButtonItem
                variant="primary"
                className="px-[20px] py-1 flex max-[900px]:hidden"
              >
                Join the Circle Now
              </ButtonItem>
            </Link>
            {isOpened ? (
              <button
                onClick={() => setIsOpened(false)}
                className="outline-none border-none hidden max-[900px]:flex"
              >
                <span className="text-[24px]">{<MdClose />}</span>
              </button>
            ) : (
              <button
                onClick={() => setIsOpened(true)}
                className="outline-none border-none hidden max-[900px]:flex"
              >
                <span className="">{<Menu />}</span>
              </button>
            )}
          </div>
          <AnimatePresence>
            {isOpened && (
              <motion.div
                className={clsx(
                  'bg-white py-4',
                  isOpened && 'fixed right-0 top-[90px] w-full',
                  !isOpened && 'fixed right-[-100vw] top-[90px]'
                )}
                initial={{
                  opacity: 0,
                  width: '0',
                }}
                animate={{
                  opacity: 1,
                  width: '100%',
                }}
                exit={{
                  width: 0,
                  opacity: 0,
                }}
              >
                <ul className="flex flex-col w-full items-center justify-between gap-[15px] font-rozanovaBold min-[900px]:hidden">
                  {navItem.map((item) => (
                    <li
                      className="relative cursor-pointer group inline-block"
                      key={item.id}
                    >
                      <Link to={item?.path}>{item?.name}</Link>
                      <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-orangish scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
                    </li>
                  ))}
                </ul>
                <Link to="/signup">
                  <ButtonItem
                    variant="primary"
                    className=" px-[20px] py-1 flex items-center justify-center mx-auto mt-4 min-[900px]:hidden"
                  >
                    Sign up
                  </ButtonItem>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;

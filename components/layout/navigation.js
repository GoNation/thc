import React, { useState, useEffect } from 'react';
import slugify from 'slugify';
import Link from 'next/link';
import Image from 'next/image';
import { Sling as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import MobileNavigation from './MobileNavigation';
import { FaAngleDown } from 'react-icons/fa';

import { routes } from 'config';
import buildAvatar from 'helpers/general/buildAvatar';
import slugifyLower from 'helpers/printing/slugifyLower';

const Navigation = ({ business, logoAsText = false }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const logo = buildAvatar(business);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hasScrolled = () => scrollPosition > 1;

  // Component for the dropdown children
  const Dropdown = ({ children }) => (
    <div className="absolute left-0 mt-0 space-y-2 bg-white text-black shadow-md py-1 hidden group-hover:block">
      {children.map(child => (
        <LinkItem
          key={slugify(child.name, { lower: true })}
          route={child}
          className={`block px-4 py-2 hover:bg-secondary hover:text-white whitespace-pre uppercase bold `}
        />
      ))}
    </div>
  );

  // Component for individual link items
  const LinkItem = ({ route, className }) => (
    <Link
      href={route.path || route.url || slugifyLower(route.name) || '#'}
      className={className}
    >
      {route.name}
    </Link>
  );

  // Function to render each route
  const renderRoute = route => (
    <div key={slugify(route.name, { lower: true })} className="relative group">
      {route.children ? (
        <>
          <span className="text-white text-sm md:text-base lg:text-xl uppercase font-bold inline-flex items-center">
            {route.name}
            <span className="ml-1">
              <FaAngleDown color="#ffffff" />
            </span>
          </span>
          <Dropdown children={route.children} />
        </>
      ) : (
        <LinkItem
          route={route}
          className={` text-sm md:text-base lg:text-xl uppercase font-bold hover:underline ${
            route.isPrimaryCalledToAction
              ? 'lg:bg-white lg:text-forestGreen lg:px-5 lg:py-1 border border-forestGreen hover:bg-forestGreen hover:text-white no-underline hover:no-underline'
              : 'text-white'
          } `}
        />
      )}
    </div>
  );

  return (
    <div className={`absolute w-full z-50 transition-all`}>
      <div className="container max-w-6xl xl:max-w-none mx-auto px-4 py-4 flex lg:flex-col items-center justify-center">
        <div className="transition-all mb-8 lg:mb-4">
          <Link href={'/'}>
            <Image
              className="transition-all"
              src={logo}
              alt="Business Logo"
              width={160}
              height={160}
            />
          </Link>
        </div>

        <div className="hidden lg:flex space-x-3">
          {routes.map(renderRoute)}
        </div>

        <div className="lg:hidden absolute right-8 top-14 md:top-16 z-10">
          <Hamburger
            toggled={navIsOpen}
            toggle={setNavIsOpen}
            color={hasScrolled() ? '#C2BAB4' : '#ffffff'}
          />
        </div>

        {navIsOpen && <MobileNavigation business={business} logo={logo} />}
      </div>
    </div>
  );
};

export default Navigation;

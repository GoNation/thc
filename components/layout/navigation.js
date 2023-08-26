import React, { useState, useEffect } from 'react';
import slugify from 'slugify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Sling as Hamburger } from 'hamburger-react';

import { routes } from 'config';
import printAddress from 'helpers/printing/printAddress';
import buildAvatar from 'helpers/general/buildAvatar';
import { motion } from 'framer-motion';
import MobileNavigation from './MobileNavigation';

import { FaAngleDown } from 'react-icons/fa';

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

  return (
    <div className={`absolute w-full z-50 transition-all`}>
      <div className="container max-w-6xl xl:max-w-none mx-auto px-4 py-4 flex lg:flex-col items-center justify-center">
        {/* Logo */}
        <div className="transition-all mb-8 lg:mb-4">
          <Link href={'/'}>
            <Image
              className="transition-all sm:hidden "
              src={logo}
              alt="Business Logo"
              width={120}
              height={120}
            />
          </Link>
          <Link href={'/'} className="hidden sm:block md:block xl:hidden">
            <Image
              className="transition-all"
              src={logo}
              alt="Business Logo"
              width={150}
              height={150}
            />
          </Link>
          <Link href={'/'} className="hidden xl:block">
            <Image
              className="transition-all"
              src={logo}
              alt="Business Logo"
              width={160}
              height={160}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-3">
          {routes.map(route => (
            <div
              key={slugify(route.name, { lower: true })}
              className="relative group"
            >
              <Link
                href={route.url || slugify(route.name, { lower: true })}
                className="text-white text-sm md:text-base uppercase font-bold hover:underline inline-flex items-center"
              >
                {route.name}
                {route.children && (
                  <span className="ml-1">
                    <FaAngleDown color="#fffff" />
                  </span>
                )}
              </Link>

              {route.children && (
                <div className="absolute left-0 mt-0 space-y-2 bg-white  text-black shadow-md hidden group-hover:block py-1">
                  {route.children.map(child => (
                    <Link
                      key={slugify(child.name, { lower: true })}
                      href={child.url || slugify(child.name, { lower: true })}
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-secondary whitespace-pre uppercase bold"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hamburger */}
        <div className="lg:hidden absolute right-8 top-14 md:top-16 z-10">
          <Hamburger
            toggled={navIsOpen}
            toggle={setNavIsOpen}
            color={hasScrolled() ? '#C2BAB4' : '#ffffff'}
          />
        </div>

        {/* Mobile Navigation */}
        {navIsOpen && <MobileNavigation business={business} logo={logo} />}
      </div>
    </div>
  );
};

export default Navigation;

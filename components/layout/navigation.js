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
      <div className="container max-w-6xl xl:max-w-none mx-auto px-4 py-4 flex flex-col items-center justify-between">
        {/* Logo */}
        <div className="transition-all mb-8">
          <Link href={'/'}>
            <Image
              className="transition-all sm:hidden "
              src={logo}
              alt="Business Logo"
              width={hasScrolled() ? 90 : 120}
              height={hasScrolled() ? 90 : 120}
            />
          </Link>
          <Link href={'/'} className="hidden md:block lg:hidden">
            <Image
              className="transition-all"
              src={logo}
              alt="Business Logo"
              width={hasScrolled() ? 90 : 150}
              height={hasScrolled() ? 90 : 150}
            />
          </Link>
          <Link href={'/'} className="hidden lg:block">
            <Image
              className="transition-all"
              src={logo}
              alt="Business Logo"
              width={hasScrolled() ? 90 : 200}
              height={hasScrolled() ? 90 : 200}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-3">
          {routes.map(route => (
            <Link
              key={slugify(route.name, { lower: true })}
              href={route.url || slugify(route.name, { lower: true })}
              className="text-white text-sm md:text-base  uppercase font-bold hover:underline"
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <div className="lg:hidden absolute right-6 z-10">
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

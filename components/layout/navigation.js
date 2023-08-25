import React, { useState, useEffect } from 'react';
import slugify from 'slugify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Fade as Hamburger } from 'hamburger-react';

import { routes } from 'config';
import printAddress from 'helpers/printing/printAddress';
import buildAvatar from 'helpers/general/buildAvatar';
import { motion } from 'framer-motion';
import MobileNavigation from './MobileNavigation';

const Navigation = ({ business, logoAsText = false }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const logo = buildAvatar(business);

  const navVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: '-150%', opacity: 0 },
  };

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

  const hasScrolled = () => false || scrollPosition > 1;

  const isprimaryCTA = r => r.isPrimaryCalledToAction;

  const router = useRouter();
  const splitIndex = Math.ceil(routes.length / 2);
  const desktopItem = `uppercase font-thin text-base hover:text-primary ${
    hasScrolled() ? 'text-dark' : 'text-white'
  }`;

  return (
    <div
      className={`absolute w-full z-50 transition-all ${
        hasScrolled() ? '' : ''
      } `}
    >
      <div className="container max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-3">
          {routes.slice(0, splitIndex).map(route => (
            <Link
              key={slugify(route.name, {
                lower: true,
              })}
              href={
                route.url ||
                slugify(route.name, {
                  lower: true,
                })
              }
            >
              {route.name}
            </Link>
          ))}
        </div>
        {/* Logo */}
        <div
          className={`md:hidden transition-all ${
            !hasScrolled() ? 'mx-auto' : ''
          }`}
        >
          <Link href={'/'}>
            <Image
              className="transition-all"
              src={logo}
              alt="Business Logo"
              width={hasScrolled() ? 60 : 120}
              height={hasScrolled() ? 60 : 120}
            />
          </Link>
        </div>
        <div
          className={`hidden md:block flex-shrink-0 transition-all ${
            !hasScrolled() ? 'mx-auto' : ''
          }`}
        >
          <Link href={'/'}>
            <Image
              className="transition-all"
              src={logo}
              alt="Business Logo"
              width={hasScrolled() ? 90 : 120}
              height={hasScrolled() ? 90 : 120}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-3">
          {routes.slice(splitIndex).map(route => (
            <Link
              key={slugify(route.name, {
                lower: true,
              })}
              href={
                route.url ||
                slugify(route.name, {
                  lower: true,
                })
              }
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Hamburger (visible only when logo moves to the left) */}

        <div className="lg:hidden absolute right-6">
          <Hamburger
            toggled={navIsOpen}
            toggle={setNavIsOpen}
            color={hasScrolled() ? '#C2BAB4' : '#ffffff'}
          />
        </div>

        {/* Mobile Navigation */}
        {navIsOpen && (
          <MobileNavigation
            navVariants={navVariants}
            business={business}
            logo={logo}
          />
        )}
      </div>
    </div>
  );
};

export default Navigation;

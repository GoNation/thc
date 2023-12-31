import React from 'react';
import Link from 'next/link';
import SocialLinks from '../ui/SocialLinks';
import Phone from 'components/contact/Phone';
import getGoogleString from 'helpers/printing/getGoogleString';
import printAddress from 'helpers/printing/printAddress';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { routes } from 'config';

const RouteLinks = ({ routes, tag }) => (
  <ul>
    {routes
      .reduce((acc, route) => {
        if (route.children) {
          acc = acc.concat(route.children);
        } else {
          acc.push(route);
        }
        return acc;
      }, [])
      .filter(route => route?.tag?.includes(tag))
      .map(route => (
        <li key={route.name}>
          <Link
            href={route.path || route.url || '#'}
            className="hover:text-primary text-sm mb-3"
          >
            {route.name}
          </Link>
        </li>
      ))}
  </ul>
);

const Footer = ({ business }) => {
  return (
    <>
      <footer className="bg-[#191612] text-white py-6 md:py-8 md:px-4 footer">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-4 max-w-6xl">
          {/* Logo and Description */}
          <div className=" md:col-span-3 lg:col-span-1 md:order-10 lg:order-first ">
            <div className="bg-white inline-block w-32 rounded-full mb-2">
              <img
                src="https://res.cloudinary.com/gonation/image/upload/v1693084987/sites/thc/THC_Logo_FINAL_ring_trans.png"
                alt={business.name}
              />
            </div>
            <p className="mb-4 max-w-xs text-sm text-white font-body">
              Crafting exceptional experiences with diverse beers, cocktails,
              and delightful food at The Hops Company in Connecticut.
            </p>
            <div className="flex">
              <SocialLinks links={business.links} />
            </div>
          </div>

          {/* Discover */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-2 text-2xl">Discover</h4>
            <RouteLinks routes={routes} tag="discover" />
          </div>

          {/* Menus */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-2 text-2xl">Menus</h4>
            <RouteLinks routes={routes} tag="menus" />
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-2 text-2xl">Contact</h4>
            <div className="flex items-center mb-2">
              <span className="mr-1">
                <FaMapMarkerAlt />
              </span>
              <a href={getGoogleString(business)}>{printAddress(business)}</a>
            </div>
            <div className="flex items-center">
              <span className="mr-1">
                <FaPhoneAlt />
              </span>
              <Phone {...business} />
            </div>
          </div>
        </div>
      </footer>

      <div className="text-center py-1 pb-2 bg-secondary border-t-2 border-t-secondary justify-center flex">
        <Link
          href="https://www.gonation.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/gn-power-white.svg"
            alt="Powered by GoNation"
            className="w-36 pt-1"
          />
        </Link>
      </div>
    </>
  );
};

export default Footer;

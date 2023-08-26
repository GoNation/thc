import React from 'react';
import SocialLinks from '../ui/SocialLinks';
import Phone from 'components/contact/Phone';
import getGoogleString from 'helpers/printing/getGoogleString';
import printAddress from 'helpers/printing/printAddress';
import { routes } from 'config';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = ({ business }) => {
  const getFirstTwoSentances = str => str.split('.').slice(0, 2).join('.');

  return (
    <>
      <footer className="bg-[#191612] text-white py-6 md:py-8 md:px-4 footer">
        <div
          className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-4 max-w-6xl"
          //   style={{
          //     backgroundImage: `linear-gradient(
          //     rgba(0, 0, 0, 0.8),
          //     rgba(0, 0, 0, 0.8)
          //   ), url('/bg.jpg')`,
          //     backgroundSize: 'cover',
          //     backgroundRepeat: 'no-repeat',
          //     backgroundPosition: 'center',
          //   }}
        >
          {/* Logo and Description */}
          <div className=" md:col-span-3 lg:col-span-1 md:order-10 lg:order-first ">
            {/* Place your logo here */}
            <div className="bg-white inline-block w-32 rounded-full mb-2">
              <img
                src="https://res.cloudinary.com/gonation/image/upload/v1693084987/sites/thc/THC_Logo_FINAL_ring_trans.png"
                alt={business.name}
                className=""
              />
            </div>
            <p className="mb-4 max-w-xs text-sm">
              Crafting exceptional experiences with diverse beers, cocktails,
              and delightful food at The Hops Company in Connecticut.
            </p>
            <div className="flex">
              <SocialLinks links={business.links} />
            </div>
          </div>

          {/* Discover */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-2">Discover</h4>
            <ul>
              {routes
                .reduce((acc, route) => {
                  if (route.children) {
                    acc = acc.concat(route.children);
                  } else {
                    acc.push(route); // Only push routes that don't have children
                  }
                  return acc;
                }, [])
                .filter(route => route?.tag?.includes('discover'))
                .map(route => (
                  <li key={route.name}>
                    <a href={route.url || '#'} className="hover:text-primary">
                      {route.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Menus */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-2">Menus</h4>
            <ul>
              {routes
                .reduce((acc, route) => {
                  if (route.children) {
                    acc = acc.concat(route.children);
                  } else {
                    acc.push(route); // Only push routes that don't have children
                  }
                  return acc;
                }, [])
                .filter(route => route?.tag?.includes('menus'))
                .map(route => (
                  <li key={route.name}>
                    <a href={route.url || '#'} className="hover:text-primary">
                      {route.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className=" font-bold mb-4">Contact</h4>
            <div className="flex items-center mb-2">
              <span className="mr-1">
                <FaMapMarkerAlt />
              </span>
              <a href={getGoogleString(business)}>
                {/* Using your printAddress helper function here */}
                {printAddress(business)}
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-1">
                <FaPhoneAlt color="" />
              </span>
              <Phone {...business} />
            </div>
          </div>
        </div>
      </footer>

      <div className="text-center py-1 pb-2 bg-secondary border-t-2 border-t-secondary justify-center flex">
        <a
          href="https://www.gonation.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/gn-power-white.svg"
            alt="Powered by GoNation"
            className="w-36 pt-1"
          />
        </a>
      </div>
    </>
  );
};

export default Footer;

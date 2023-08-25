import React, { useState } from 'react';
import SocialLinks from '../ui/SocialLinks';
import {
  primaryColor,
  routes,
  hardCodedAddressText,
  hardCodedAddressURL,
} from 'config';
import Link from 'next/link';
import HoursDisplay from 'components/hours/hoursDisplay';
import printAddress from 'helpers/printing/printAddress';
import getGoogleString from 'helpers/printing/getGoogleString';
import TextLogo from '../TextLogo';
import Phone from 'components/contact/Phone';

const Footer = ({ business, shoutData, logoAsText = false }) => {
  const [displayShout, setDisplayShout] = useState(false);
  const { links, phone } = business;
  const footerClassList =
    'static md:fixed bottom-0 right-0 left-0 bg-dark p-2 px-4 z-20 justify-between text-white font-body  md:flex items-center md:max-h-[52px] border-t-2 border-primary mb-12 md:mb-0';
  const linkClassList = 'hover:text-primary transition-all duration-1000';

  const renderFooterNavItems = () => {
    return routes
      .filter(route => route.inFooter)
      .map(itm => (
        <span key={itm.url} className="hidden lg:inline ml-4  ">
          <Link href={itm.url}>
            <a
              className="px-3 bg-primary font-normal border-2 border-primary hover:text-primary transition-all duration-500 text-white py-1 hover:bg-transparent hover:text-white"
              target={'_blank'}
            >
              {itm.name}
            </a>
          </Link>
        </span>
      ));
  };

  return (
    <>
      <footer
        className="bg-secondary text-white footer py-8 md:py-32 "
        style={{
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)
        ), url('/bg.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Mobile view: Stacked layout */}
          <div className="md:flex md:justify-between md:items-start">
            {/* Location */}
            <div className="mb-8 md:mb-0 flex-1">
              <h4 className="text-lg font-bold mb-2 text-background md:text-xl">
                Location
              </h4>
              <a
                href={getGoogleString(business)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="max-w-[150px]">{printAddress(business)}</p>
              </a>
            </div>
            {/* Hours */}
            <div className="mb-8 md:mb-0 flex-1">
              <h4 className="text-lg font-bold mb-2 text-background md:text-xl">
                Hours
              </h4>
              <div className="max-w-[250px]">
                <HoursDisplay hours={business.hours} />
              </div>
            </div>
            {/* Contact Us */}
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-2 text-background md:text-xl">
                Contact Us
              </h4>
              <p className="mb-2">
                Phone: <Phone {...business} />
              </p>
              <div className="flex mb-2">
                <SocialLinks links={business.links} />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center py-1 pb-2 bg-lighter border-t-2 border-t-primary">
        <a
          href="https://www.gonation.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/gn-power-black.svg" alt="" className="w-36" />
        </a>
      </div>
    </>
  );
};

export default Footer;

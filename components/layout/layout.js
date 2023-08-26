import React from 'react';
import Image from 'next/image';
import gnPowerBlack from 'assets/gn-power-black.svg';
import Head from 'next/head';
import Navigation from './navigation';
import Footer from './footer';
import FixedCallToActions from './FixedCallToActions';
import buildAvatar from '../../helpers/general/buildAvatar';
import { domain } from '../../config';
import slugifyLower from '../../helpers/printing/slugifyLower';

const Layout = ({
  children,
  business,
  pageTitle,
  pageDescription,
  shoutData,
}) => {
  const getPageTitle = () => {
    if (pageTitle) {
      return `${pageTitle} | ${business.name}`;
    }
    return `${business.name}`;
  };

  const getPageDescription = () => {
    if (pageDescription) {
      return pageDescription;
    }
    return `${business.desc}`;
  };

  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={getPageDescription()} />
        <meta
          property="og:url"
          content={`${domain}/${slugifyLower(pageTitle)}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta property="og:image" content={buildAvatar(business)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta
          property="twitter:url"
          content={`${domain}/${slugifyLower(pageTitle)}`}
        />
        <meta name="twitter:title" content={getPageTitle()} />
        <meta name="twitter:description" content={getPageDescription()} />
        <meta name="twitter:image" content={buildAvatar(business)} />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Navigation business={business} />
      <main className="">{children}</main>
      <div className="md:hidden">
        {/* <FixedCallToActions
          phone
          directions
          business={business}
          shoutData={shoutData}
        /> */}
      </div>

      <Footer logoAsText business={business} shoutData={shoutData} />
      <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
    </>
  );
};

export default Layout;

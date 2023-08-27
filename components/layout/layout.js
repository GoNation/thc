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
import MultiStoryHero from 'components/story-components/MultiStoryHero';
import { useRouter } from 'next/router';
import findPoweredImage from 'helpers/general/findPoweredImage';
import PageHero from 'components/heros/PageHero';

const Layout = ({
  children,
  business,
  pageTitle,
  pageDescription,
  shoutData,
  homeSliderData,
  poweredImagesData,
}) => {
  const router = useRouter();
  const { pathname } = router;
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

  const retrievePageHeroImage = () => {
    const pathNameWithoutSlash = pathname.replace('/', '');
    const foundImage = findPoweredImage(
      pathNameWithoutSlash.toString(),
      poweredImagesData
    );
    if (foundImage) {
      return foundImage;
    }
    return null;
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
      </Head>
      <Navigation business={business} />
      {homeSliderData ? (
        <MultiStoryHero stories={homeSliderData} slideDuration={8000} />
      ) : (
        <PageHero img={retrievePageHeroImage()} pageTitle={pageTitle} />
      )}

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
    </>
  );
};

export default Layout;

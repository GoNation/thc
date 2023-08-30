import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navigation from './navigation';
import Footer from './footer';
import buildAvatar from 'helpers/general/buildAvatar';
import { domain, routes } from 'config';
import slugifyLower from 'helpers/printing/slugifyLower';
import PageHero from 'components/heros/PageHero';
import { retrievePageHeroImage } from 'helpers';
import PageHead from './PageHead';

const WithLayout = Component => {
  return function WrappedComponent(props) {
    const router = useRouter();
    const { pathname } = router;

    const pageData = routes.find(route => route.path === pathname);

    const { shoutData, poweredImagesData, aboutData } = props;

    const pageTitle = `${pageData?.name} | ${aboutData.name}` || pathname;
    const pageDescription = pageData?.pageDescription || aboutData.desc;
    const customPageHero = pageData?.customPageHero || null;
    const hidePageHero = pageData?.hidePageHero || false;

    return (
      <>
        <PageHead
          title={pageTitle}
          description={pageDescription}
          avatar={buildAvatar(aboutData)}
        />
        <Navigation business={aboutData} />
        {!hidePageHero && (
          <PageHero
            img={retrievePageHeroImage(
              pathname,
              customPageHero,
              poweredImagesData
            )}
            pageTitle={pageTitle}
          />
        )}

        <main className="">
          <Component {...props} />
        </main>

        <Footer logoAsText business={aboutData} shoutData={shoutData} />
      </>
    );
  };
};

export default WithLayout;

import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/layout';
import PageHero from 'components/heros/PageHero';
import BasicContentContainer from 'components/story-components/BasicContentContainer';
import { businessId, routes } from 'config';
import findPoweredImage from 'helpers/general/findPoweredImage';
import SideBySideImage from 'components/story-components/SideBySideImage';
import findStoryByTag from 'helpers/general/findStoryByTag';

const About = ({ aboutData, poweredImagesData, shoutData, storiesData }) => {
  const poweredImage = findPoweredImage('about-pagehero', poweredImagesData);
  const story = findStoryByTag('about-page-chef', storiesData.general);
  return (
    <Layout
      routes={routes}
      business={aboutData}
      pageTitle="About"
      shoutData={shoutData}
    >
      <PageHero img={poweredImage} pageTitle="About" />
      <section className="">
        <BasicContentContainer businessData={aboutData}></BasicContentContainer>
        <SideBySideImage
          story={story}
          noNegativeMargin
          widthLeft="md:w-full lg:w-1/2 xl:w-1/3"
          widthRight="md:w-full lg:w-1/2 xl:w-2/3"
          leftAlign
        />
      </section>
    </Layout>
  );
};

export default About;

export async function getServerSideProps(context) {
  const { poweredImagesData, aboutData, shoutData, storiesData } =
    await fetchGoNationData({
      poweredImages: true,
      about: true,
      shout: true,
      businessId,
      stories: true,
    });
  return {
    props: {
      poweredImagesData,
      aboutData,
      shoutData,
      storiesData,
    },
  };
}

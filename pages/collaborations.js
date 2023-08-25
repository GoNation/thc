import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/layout';
import PageHero from 'components/heros/PageHero';
import BasicContentContainer from 'components/story-components/BasicContentContainer';
import { businessId, routes } from 'config';
import findPoweredImage from 'helpers/general/findPoweredImage';
import SideBySideImage from 'components/story-components/SideBySideImage';
import findStoryByTag from 'helpers/general/findStoryByTag';
import findStoriesByTag from 'helpers/general/findStoriesByTag';
import TeamsView from 'components/story-components/TeamsView';

const Collaborations = ({
  aboutData,
  poweredImagesData,
  shoutData,
  storiesData,
}) => {
  const poweredImage = findPoweredImage(
    'collaborations-pagehero',
    poweredImagesData
  );

  const collabs = findStoriesByTag('collaborations', storiesData.general);
  return (
    <Layout
      routes={routes}
      business={aboutData}
      pageTitle="Collaborations"
      shoutData={shoutData}
    >
      <PageHero img={poweredImage} pageTitle="Collaborations" />
      <section className="">
        <TeamsView stories={collabs} business={aboutData} />
        {/* <BasicContentContainer businessData={aboutData}></BasicContentContainer> */}
        {/* <SideBySideImage
          story={story}
          noNegativeMargin
          widthLeft="md:w-full lg:w-1/2 xl:w-1/3"
          widthRight="md:w-full lg:w-1/2 xl:w-2/3"
          leftAlign
        /> */}
      </section>
    </Layout>
  );
};

export default Collaborations;

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

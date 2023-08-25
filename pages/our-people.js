import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/layout';
import PageHero from 'components/heros/PageHero';
import BasicContentContainer from 'components/story-components/BasicContentContainer';
import { businessId, routes } from 'config';
import findPoweredImage from 'helpers/general/findPoweredImage';
import SideBySideImage from 'components/story-components/SideBySideImage';
import findStoryByTag from 'helpers/general/findStoryByTag';
import TeamsView from 'components/story-components/TeamsView';

const OurPeople = ({
  aboutData,
  poweredImagesData,
  shoutData,
  storiesData,
}) => {
  const poweredImage = findPoweredImage(
    'our-people-pagehero',
    poweredImagesData
  );
  const stories = storiesData.team;
  console.log(stories);
  //   const story = findStoryByTag('our-people-page-hero', storiesData.general);
  return (
    <Layout
      routes={routes}
      business={aboutData}
      pageTitle="Our People"
      shoutData={shoutData}
    >
      <PageHero img={poweredImage} pageTitle="Our People" />
      <section className="">
        {/* <BasicContentContainer businessData={aboutData}></BasicContentContainer> */}
        <TeamsView stories={stories} business={aboutData}></TeamsView>
      </section>
    </Layout>
  );
};

export default OurPeople;

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

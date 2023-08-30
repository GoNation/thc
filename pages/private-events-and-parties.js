import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/WithLayout';
import LargeContentContainer from 'components/story-components/LargeContentContainer';
import SideBySideImage from 'components/story-components/SideBySideImage';
import findStoryByName from 'helpers/findStoryByName';
import { sideBySideConfig } from 'content/componentConfigs';
findStoryByName;
import PartiesForm from 'components/contact/PartiesForm';

const PrivateEventsAndParties = ({
  aboutData,
  poweredImagesData,
  shoutData,
  storiesData,
}) => {
  const privateEventsAndPartiesStories = [
    findStoryByName('Private Events & Parties Story 1', storiesData.general),
    findStoryByName('Private Events & Parties Story 2', storiesData.general),
    findStoryByName('Private Events & Parties Story 3', storiesData.general),
    findStoryByName('Private Events & Parties Story 4', storiesData.general),
    findStoryByName('Private Events & Parties Story 5', storiesData.general),
    findStoryByName('Private Events & Parties Story 6', storiesData.general),
  ];

  console.log(privateEventsAndPartiesStories);

  return (
    <Layout
      business={aboutData}
      poweredImagesData={poweredImagesData}
      shoutData={shoutData}
      pageTitle="Private Parties & Events"
      customPageHero="parties-pagehero"
    >
      <section className="min-h-screen">
        <LargeContentContainer
          story={privateEventsAndPartiesStories[0]}
          solidBg="#ffffff"
        />
        {/* Map through private events and parties, skipping the first one and render <SideBySide for each and reverse={true} for every other  */}
        {privateEventsAndPartiesStories.map((story, index) => {
          if (index === 0) return;
          return (
            <SideBySideImage
              key={story.id}
              story={story}
              config={{ ...sideBySideConfig, reversed: index % 2 === 0 }}
            />
          );
        })}
        <PartiesForm name="Private Parties Form" />
      </section>
    </Layout>
  );
};

export default PrivateEventsAndParties;

export async function getStaticProps() {
  const { poweredImagesData, aboutData, galleryData, shoutData, storiesData } =
    await fetchGoNationData({
      poweredImages: true,
      about: true,
      gallery: true,
      shout: true,
      stories: true,
    });
  return {
    props: {
      poweredImagesData,
      aboutData,
      galleryData,
      shoutData,
      storiesData,
    },
  };
}

import AppContext from 'context/AppContext';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/layout';

import MultiStoryHero from 'components/story-components/MultiStoryHero';
import ExpandableShout from 'components/shout/ExpandableShout';

export default function Home({ storiesData, aboutData, shoutData }) {
  // const routeData = () => routes.find('');
  //   const heroStory = findStoryByTag('1', storiesData.general);
  //   const homeAboutStory = findStoryByTag('2', storiesData.general);
  //   const homePhotoSlider = findStoryByTag('3', storiesData.general);
  //   const homeBookingStory = findStoryByTag('4', storiesData.general);
  //   const blockPhotosStory = findStoryByTag('5', storiesData.general);
  //   const homeServicesStory = findStoryByTag('6', storiesData.general);
  //   const ctaStories = [
  //     findStoryByTag('7', storiesData.general),
  //     findStoryByTag('8', storiesData.general),
  //     findStoryByTag('9', storiesData.general),
  //   ];
  //   const homeOurPeopleStory = findStoryByTag('10', storiesData.general);
  //   const homePhotoBlockStory = findStoryByTag('11', storiesData.general);
  //   const homeCancellationStory = findStoryByTag('12', storiesData.general);
  //   const homeContactInfoStory = findStoryByTag('13', storiesData.general);
  const homepageSliderStories = storiesData?.general
    ?.filter(
      story =>
        story.name?.toLowerCase()?.includes('homepage slider') &&
        story.media?.length
    )
    .sort((a, b) => {
      const numA = parseInt(a.name.match(/\d+/));
      const numB = parseInt(b.name.match(/\d+/));

      return numA - numB; // This will sort in ascending order based on the numbers
    });

  return (
    <AppContext.Provider value={{ storiesData, aboutData, shoutData }}>
      <Layout business={aboutData} pageTitle="Home" shoutData={shoutData}>
        <MultiStoryHero stories={homepageSliderStories} slideDuration={8000} />
        <ExpandableShout isExpandable={false} shout={shoutData.shout} />
        <iframe
          className="h-96 sm:h-[400px] lg:h-[750px]"
          src="https://www.youtube.com/embed/D9CMUOWmcZs?si=degvSOb4bd3r4mmk&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Layout>
    </AppContext.Provider>
  );
}

export async function getStaticProps() {
  const {
    storiesData,
    poweredImagesData,
    shoutData,
    aboutData,
    menuInventoryData,
    galleryData,
  } = await fetchGoNationData({
    stories: true,
    shout: true,
    poweredImages: true,
    about: true,
    menuInventory: true,
    menuPL: 1,
    gallery: true,
  });
  return {
    props: {
      storiesData,
      poweredImagesData,
      shoutData,
      aboutData,
      menuInventoryData,
      galleryData,
    },
  };
}

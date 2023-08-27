import AppContext from 'context/AppContext';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/layout';
import matter from 'gray-matter';

import MultiStoryHero from 'components/story-components/MultiStoryHero';
import ExpandableShout from 'components/shout/ExpandableShout';
import SideBySideImage from 'components/story-components/SideBySideImage';
import styles from 'styles';
import fs from 'fs';
import path from 'path';

export default function Home({
  storiesData,
  aboutData,
  shoutData,
  poweredImagesData,
  filesData,
}) {
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

  const findStoryByName = (name = '') =>
    storiesData.general.find(story =>
      story.name.toLowerCase().includes(name.toLowerCase())
    );

  return (
    <AppContext.Provider value={{ storiesData, aboutData, shoutData }}>
      <Layout
        business={aboutData}
        pageTitle="Home"
        shoutData={shoutData}
        poweredImagesData={poweredImagesData}
        homeSliderData={homepageSliderStories}
      >
        <ExpandableShout isExpandable={false} shout={shoutData.shout} />
        <div className="bg-black p-8">
          <iframe
            className="h-96 sm:h-[400px] lg:h-[750px]"
            src="https://www.youtube.com/embed/D9CMUOWmcZs?si=degvSOb4bd3r4mmk&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <section className="">
          <SideBySideImage
            config={filesData[0]}
            story={findStoryByName('Homepage story 2')}
          />
          <SideBySideImage
            config={filesData[2]}
            story={findStoryByName('Homepage story 3')}
          />

          <SideBySideImage
            config={filesData[0]}
            story={findStoryByName('Homepage story 4')}
          />
        </section>
      </Layout>
    </AppContext.Provider>
  );
}

export async function getStaticProps() {
  const directory = path.join(process.cwd(), 'content/sidebysideimage');
  const filenames = fs.readdirSync(directory);

  const filesData = filenames.map(filename => {
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsedContent = matter(fileContent); // Use gray-matter to parse the file
    return parsedContent.data; // Return only the frontmatter
  });
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
    gallery: false,
  });
  return {
    props: {
      storiesData,
      poweredImagesData,
      shoutData,
      aboutData,
      menuInventoryData,
      galleryData,
      filesData,
    },
  };
}

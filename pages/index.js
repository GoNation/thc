import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import ExpandableShout from 'components/shout/ExpandableShout';
import WithLayout from 'components/layout/WithLayout';
import MultiStoryHero from 'components/story-components/MultiStoryHero';
import StorySection from 'components/StorySection';
import BackgroundVideo from 'components/BackgroundVideo';

import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import { filterAndSortStories } from 'helpers';

const Home = ({ storiesData, shoutData, filesData }) => {
  const homepageSliderStories = filterAndSortStories(
    storiesData,
    'homepage slider'
  );

  const homePageStorySectionStories = filterAndSortStories(
    storiesData,
    'homepage story section'
  );

  return (
    <>
      <MultiStoryHero stories={homepageSliderStories} slideDuration={8000} />
      <ExpandableShout isExpandable={false} shout={shoutData.shout} />
      <BackgroundVideo
        videoUrl="https://www.youtube.com/embed/D9CMUOWmcZs?si=degvSOb4bd3r4mmk&amp;controls=0"
        videoTitle="YouTube video player"
      />

      <StorySection storiesData={storiesData.general} filesData={filesData} />
    </>
  );
};

export default WithLayout(Home);

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

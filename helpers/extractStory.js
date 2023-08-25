import { formulateImage } from './printing/formulateImage';

const extractStory = (story, imgSize = 800) => {
  const { media } = story;

  const linkTitle = Object.keys(story.links)[0] || '';
  const linkAddress = story.links[linkTitle];
  const firstImage = media?.[0];
  const images = media.map(img =>
    formulateImage({
      cloudinaryId: img.cloudinaryId,
    })
  );

  return {
    firstImage,
    linkTitle,
    linkAddress,
    images,
    ...story,
  };
};

export default extractStory;

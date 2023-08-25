import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import parseCloudinaryImage from 'helpers/cloudinary/parseCloudinaryImage';
import extractStory from 'helpers/extractStory';

const fadeVariants = {
  enter: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function MultiStoryHero({
  stories = [],
  slideDuration = 4000,
  transitionDuration = 3,
  imageSize = 1920,
  imgClassName = 'absolute top-0 left-0 w-full h-full object-cover',
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % stories.length);
    }, slideDuration); // change slide as per prop

    return () => clearInterval(interval);
  }, [stories, slideDuration]);

  if (!stories.length) return null;

  const getImageSrc = index => {
    const story = stories[index];
    const { firstImage } = extractStory(story);
    return parseCloudinaryImage({
      cloudinaryId: firstImage.cloudinaryId,
      size: imageSize,
    });
  };

  const getStoryContent = index => {
    const story = stories[index];
    const { linkTitle, linkAddress, title, subtitle } = extractStory(story);
    return (
      <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-30 px-4">
        <div className="relative flex flex-col items-center justify-center w-full h-full text-center">
          <h2 className="text-4xl font-bold text-white uppercase font-display">
            {title}
          </h2>
          <h3 className="text-xl font-bold text-white">{subtitle}</h3>
          {linkAddress && linkTitle ? (
            <a
              href={linkAddress}
              className="px-8 py-2 mt-4 text-white bg-secondary border-2 border-white rounded text-xl font-bold uppercase"
            >
              {linkTitle}
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          variants={fadeVariants}
          initial="enter"
          animate="visible"
          exit="exit"
          transition={{ duration: transitionDuration }}
        >
          <motion.img
            className={imgClassName}
            src={getImageSrc(activeIndex)}
            alt="Current Slide"
          />
          <div>{getStoryContent(activeIndex)}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

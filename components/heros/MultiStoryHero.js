import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CTA from 'components/ui/CTA';
import extractStory from 'helpers/extractStory';

export default function MultiStoryHero({ data = [], overlayOpacity = 0.3 }) {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
  };
  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        showIndicators
        showThumbs={false}
      >
        {data.map((slide, index) => {
          const story = extractStory(slide);
          const { linkTitle } = story;
          return (
            <div key={index} className="carousel-slide">
              <div className="carousel-image-wrapper">
                <img
                  src={story?.images?.length ? story?.images[0] : ''}
                  alt={story.title}
                  className="carousel-image"
                />
              </div>
              <div style={overlayStyle} />

              <div className="carousel-content">
                <h2 className="carousel-title font-display text-xl md:text-3xl lg:text-6xl  mb-12">
                  {story.title}
                </h2>
                <CTA classList="py-8 uppercase" url={`${story.linkAddress}`}>
                  {linkTitle}
                </CTA>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

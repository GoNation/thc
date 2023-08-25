import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import Image from 'next/image';
import CTA from '../ui/CTA';
import Body from '../ui/Body';
import { Slide } from 'react-reveal';
import { primaryColor } from 'config';

const LargeContentContainer = ({ story, solidBg, hideIcon = false }) => {
  //   <img
  //     alt={description}
  //     className={`h-full object-cover`}
  //     src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
  //   />;
  const icon = hideIcon ? (
    ''
  ) : (
    <span className="animate-pulse">
      <BsArrowDown fill={'#fff'} size={64}></BsArrowDown>
    </span>
  );
  if (story?.media[0] && !solidBg) {
    const { cloudinaryId, description } = story.media[0];
    const linkTitle = Object.keys(story.links).length
      ? Object.keys(story.links)[0]
      : '';
    const linkAddress = story.links[linkTitle];
    return (
      <div
        className={`xl:bg-fixed screen w-full bg-cover flex justify-center items-center p-7 px-12 py-16 relative bg-center  ${solidBg}`}
        style={
          solidBg
            ? {}
            : {
                backgroundImage: `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId})`,
              }
        }
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-80"></div>
        <div className="max-w-xl m-auto text-white relative text-center bg-white border-4 border-light p-4 md:p-12 ">
          <div className="mb-6  text-md">
            <Slide left>
              <h4 className="text-2xl md:text-5xl font-display text-secondary ">
                {story.title}
              </h4>
            </Slide>
          </div>
          <div className="mb-3  text-md">
            <Slide left>
              <h4 className="text-sm font-display text-dark">
                {story.subtitle}
              </h4>
            </Slide>
          </div>
          <Slide right>
            <div className="leading-loose text-base font-body text-dark mb-8">
              <Body body={story.body} />
            </div>
          </Slide>
          <Slide left>
            {linkTitle.length ? (
              <div className="mb-4">
                <CTA primaryFilled url={`${linkAddress}`}>
                  {linkTitle}
                </CTA>
              </div>
            ) : (
              ''
            )}
          </Slide>
        </div>
      </div>
    );
  }

  if (solidBg) {
    const linkTitle = Object.keys(story.links)[0] || '';
    const linkAddress = story.links[linkTitle];

    return (
      <div
        className={`w-full bg-cover flex justify-center items-center p-7 px-4 relative bg-center py-16 ${solidBg}`}
        style={
          solidBg
            ? {}
            : {
                backgroundImage: `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId})`,
              }
        }
      >
        <div className="absolute top-0 left-0 w-full h-full "></div>
        <div className="max-w-xl m-auto text-dark relative text-center">
          <div className="mb-6 leading-7 text-md">
            <Slide left>
              <h4 className="text-3xl lg:text-4xl  font-display text-primary uppercase">
                {story.title}
              </h4>
            </Slide>
          </div>
          <Slide right>
            <div className="my-12 mt-6 leading-loose text-base font-body text-dark">
              <Body body={story.body} />
            </div>
          </Slide>
          {linkTitle?.length ? (
            <Slide left>
              <CTA primaryFilled url={`${linkAddress}`}>
                {linkTitle}
              </CTA>
            </Slide>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
};

export default LargeContentContainer;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CTA from './CTA';
import ContentComponent from 'components/ContentComponent';
import Body from './Body';

const ClickableBox = ({ story, noClick, idx }) => {
  const cloudinaryId = story?.media[0]?.cloudinaryId;
  const linkTitle = Object.keys(story.links)[0] || '';
  const linkAddress = story.links[linkTitle];
  const { url, title, subtitle, body } = story;

  return (
    <div className="cursor-pointer md:hover:opacity-90">
      <Link href={url ? url : linkAddress?.toLowerCase() || '/'}>
        <div className="relative md:min-h-[340px] overflow-hidden rounded-lg shadow-md group">
          {cloudinaryId ? (
            <Image
              className="object-cover transition-transform duration-500 ease-in-out md:group-hover:scale-110"
              src={`https://res.cloudinary.com/gonation/w_800/q_auto/f_auto/${cloudinaryId}`}
              alt={story.title}
              layout="fill"
            />
          ) : (
            ''
          )}
          {/* <div className="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <CTA primaryFilled url={`${linkAddress}`}>
              {linkTitle}
            </CTA>
          </div> */}
          <div className="bg-dark py-2 px-2">
            <h4 className="text-primary font-display text-4xl md:text-3xl font-bold uppercase text-center">
              {title}
            </h4>
          </div>
          <div className="p-4">
            <h2>{subtitle}</h2>
            <div className="text-lg md:text-xl">
              <Body body={body} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ClickableBox;

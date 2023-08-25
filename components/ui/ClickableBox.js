import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CTA from './CTA';

const ClickableBox = ({ story, noClick, idx }) => {
  const { cloudinaryId } = story.media[0];
  const linkTitle = Object.keys(story.links)[0] || '';
  const linkAddress = story.links[linkTitle];
  const { url } = story;

  return (
    <div className="cursor-pointer md:hover:opacity-90">
      <Link href={url ? url : linkAddress?.toLowerCase() || '/'}>
        <div className="relative h-[300px] overflow-hidden rounded-lg shadow-md group">
          <Image
            className="object-cover transition-transform duration-500 ease-in-out md:group-hover:scale-110"
            src={`https://res.cloudinary.com/gonation/w_800/q_auto/f_auto/${cloudinaryId}`}
            alt={story.title}
            layout="fill"
          />
          <div className="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <CTA primaryFilled url={`${linkAddress}`}>
              {linkTitle}
            </CTA>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ClickableBox;

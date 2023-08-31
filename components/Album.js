import React from 'react';
import Image from 'next/image';

const Album = ({ album, coverPhotoIndex = 0, customStyling, onAlbumClick }) => {
  const coverPhoto = album.photos[coverPhotoIndex];

  const albumNameStyle = name =>
    `absolute z-0 text-white text-shadow text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl hover:text-primary ${
      name.toLowerCase().includes('wedding') ? 'font-wedding' : 'font-display'
    }`;

  return (
    <div
      className={`${customStyling} p-4 rounded-lg shadow-md cursor-pointer`}
      onClick={onAlbumClick}
    >
      <div className="flex flex-col items-center justify-center relative">
        {/* Cover Photo */}
        <div className="w-full h-56 md:h-80 lg:h-96 relative rounded-md overflow-hidden shadow-sm mb-4">
          <Image
            src={coverPhoto.imageUrl}
            layout="fill"
            objectFit="cover"
            alt={coverPhoto.caption || 'Album Cover'}
          />
        </div>
        {/* Album Name */}
        <h2 className={albumNameStyle(album.name)}>{album.name}</h2>
      </div>
    </div>
  );
};

export default Album;

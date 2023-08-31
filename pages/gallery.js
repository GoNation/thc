import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import WithLayout from 'components/layout/WithLayout';
import Masonry from 'components/gallery/Masonry';
import { filteredOutGalleryImages } from 'config';
import Album from 'components/Album';
// import left arrow icon from react-icons
import { FaArrowLeft } from 'react-icons/fa';

const Gallery = ({ galleryData }) => {
  const router = useRouter();
  const [activeAlbum, setActiveAlbum] = useState(null);

  const filterGalleryAlbums = abm =>
    !filteredOutGalleryImages.includes(abm.name.toLowerCase());

  const filteredData = galleryData.filter(filterGalleryAlbums);

  const handleAlbumClick = album => {
    setActiveAlbum(album);
    router.push(`/gallery#${album.id}`);
  };

  const handleBackClick = () => {
    setActiveAlbum(null);
    router.push(`/gallery`);
  };

  return (
    <section className="min-h-screen with-texture px-0 bg-dark py-4">
      {activeAlbum ? (
        <>
          <button
            onClick={handleBackClick}
            className="bg-dark text-white underline font-light font-body inline-flex items-center mb-4 hover:text-primary pl-2"
          >
            <span className="mr-2">
              <FaArrowLeft></FaArrowLeft>
            </span>{' '}
            Go Back to Albums
          </button>
          <h2
            className={`my-6 text-white font-bold  text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center ${
              activeAlbum.name.toLowerCase().includes('wedding')
                ? 'font-wedding normal-case'
                : 'font-display uppercase'
            }`}
          >
            {activeAlbum.name}
          </h2>
          <Masonry data={[activeAlbum]} />
        </>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 max-w-[1440px] mx-auto">
          {filteredData.map(album => (
            <button onClick={() => handleAlbumClick(album)} key={album.id}>
              <Album album={album} />
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default WithLayout(Gallery);

export async function getStaticProps() {
  const { poweredImagesData, aboutData, menuInventoryData, galleryData } =
    await fetchGoNationData({
      poweredImages: true,
      about: true,
      gallery: true,
      shout: false,
    });
  return {
    props: {
      poweredImagesData,
      aboutData,
      menuInventoryData,
      galleryData,
    },
  };
}

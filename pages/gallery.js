import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/WithLayout';
import Masonry from 'components/gallery/Masonry';
import { filteredOutGalleryImages } from 'config';
import findPoweredImage from 'helpers/general/findPoweredImage';

const Gallery = ({ aboutData, poweredImagesData, galleryData, shoutData }) => {
  const poweredImage = findPoweredImage('gallery-pagehero', poweredImagesData);

  const filterGalleryAlbums = abm =>
    !filteredOutGalleryImages.includes(abm.name.toLowerCase());
  return (
    <Layout
      business={aboutData}
      pageTitle="Gallery"
      shoutData={shoutData}
      poweredImagesData={poweredImagesData}
    >
      <section className="min-h-screen with-texture  px-0 bg-dark py-4">
        <Masonry data={galleryData.filter(filterGalleryAlbums)}></Masonry>
      </section>
    </Layout>
  );
};

export default Gallery;

export async function getStaticProps() {
  const {
    poweredImagesData,
    aboutData,
    menuInventoryData,
    galleryData,
    shoutData,
  } = await fetchGoNationData({
    poweredImages: true,
    about: true,
    gallery: true,
    shout: true,
  });
  return {
    props: {
      poweredImagesData,
      aboutData,
      menuInventoryData,
      galleryData,
      shoutData,
    },
  };
}

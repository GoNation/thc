import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/layout';
import Masonry from 'components/gallery/Masonry';
import { filteredOutGalleryImages } from 'config';
import findPoweredImage from 'helpers/general/findPoweredImage';
import PageHero from 'components/heros/PageHero';

const Reservations = ({
  aboutData,
  poweredImagesData,
  galleryData,
  shoutData,
}) => {
  const poweredImage = findPoweredImage(
    'reservations-pagehero',
    poweredImagesData
  );

  return (
    <Layout
      business={aboutData}
      pageTitle={`Reserve A Table At ${aboutData.name}`}
      shoutData={shoutData}
    >
      <PageHero img={poweredImage} pageTitle="Reservations" />
      <section className="min-h-screen bg-white with-texture pt-6 px-6 mt-28"></section>
    </Layout>
  );
};

export default Reservations;

export async function getServerSideProps() {
  const {
    poweredImagesData,
    aboutData,
    menuInventoryData,
    galleryData,
    shoutData,
  } = await fetchGoNationData({
    poweredImages: true,
    about: true,
    gallery: false,
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

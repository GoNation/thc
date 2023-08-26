import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/layout';

const Events = ({ aboutData, poweredImagesData, shoutData }) => {
  return (
    <Layout
      business={aboutData}
      poweredImagesData={poweredImagesData}
      shoutData={shoutData}
      pageTitle="Events"
    >
      <section className="min-h-screen">
        {/* Other content will go here */}
      </section>
    </Layout>
  );
};

export default Events;

export async function getStaticProps() {
  const { poweredImagesData, aboutData, galleryData, shoutData } =
    await fetchGoNationData({
      poweredImages: true,
      about: true,
      gallery: true,
      shout: true,
    });
  return {
    props: {
      poweredImagesData,
      aboutData,
      galleryData,
      shoutData,
    },
  };
}

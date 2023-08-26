import React from 'react';
import Layout from 'components/layout/layout';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';

const News = ({ aboutData, poweredImagesData, shoutData }) => {
  return (
    <Layout
      business={aboutData}
      poweredImagesData={poweredImagesData}
      shoutData={shoutData}
      pageTitle="News"
    >
      <section className="min-h-screen">
        {/* Other content will go here */}
      </section>
    </Layout>
  );
};

export default News;

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

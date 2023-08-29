import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/layout';
import EventsComponent from 'components/events/Events';

const Events = ({ aboutData, poweredImagesData, shoutData, eventsData }) => {
  return (
    <Layout
      business={aboutData}
      poweredImagesData={poweredImagesData}
      shoutData={shoutData}
      pageTitle="Events"
    >
      <section className="py-4 md:py-12 bg-dark">
        {/* Other content will go here */}
        <EventsComponent
          pageTitle={'Events'}
          businessData={aboutData}
          recurringEvents={eventsData.recurringEventsData.events}
          singleEvents={eventsData.specialEventsData.events}
        />
      </section>
    </Layout>
  );
};

export default Events;

export async function getStaticProps() {
  const { poweredImagesData, aboutData, galleryData, shoutData, eventsData } =
    await fetchGoNationData({
      poweredImages: true,
      about: true,
      gallery: true,
      shout: true,
      events: true,
    });
  return {
    props: {
      poweredImagesData,
      aboutData,
      galleryData,
      shoutData,
      eventsData,
    },
  };
}

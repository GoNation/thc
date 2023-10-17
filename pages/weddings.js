import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import WithLayout from 'components/layout/WithLayout';
import findStoryByName from 'helpers/findStoryByName';

import SideBySideImage from 'components/story-components/SideBySideImage';
import LargeContentContainer from 'components/story-components/LargeContentContainer';
import ClickableBoxes from 'components/story-components/ClickableBoxes';
import Reviews from 'components/Reviews';
import WeddingForm from 'components/contact/WedingForm';
import RenderStoryImages from 'components/RenderStoryImages';

const Weddings = ({
  aboutData,
  poweredImagesData,
  shoutData,
  storiesData,
  menuInventoryData,
}) => {
  const weddingStories = [
    // wedding page stories go up to 11
    findStoryByName('wedding page story 2', storiesData.general),
    findStoryByName('wedding page story 3', storiesData.general),
    findStoryByName('wedding page story 4', storiesData.general),
    findStoryByName('wedding page story 5', storiesData.general),
    findStoryByName('wedding page story 6', storiesData.general),
    findStoryByName('wedding page story 7', storiesData.general),
    findStoryByName('wedding page story 8', storiesData.general),
    findStoryByName('wedding page story 9', storiesData.general),
    findStoryByName('wedding page story 10', storiesData.general),
    findStoryByName('wedding page story 11', storiesData.general),
  ].filter((story) => story?.id);

  const awards = [
    findStoryByName(
      "WEDDING WIRE COUPLE'S CHOICE AWARDS 2019",
      storiesData.general
    ),
    findStoryByName(
      "WEDDING WIRE COUPLE'S CHOICE AWARDS 2021",
      storiesData.general
    ),
    findStoryByName(
      "WEDDING WIRE COUPLE'S CHOICE AWARDS 2022",
      storiesData.general
    ),
    findStoryByName(
      "WEDDING WIRE COUPLE'S CHOICE AWARDS 2023",
      storiesData.general
    ),
    findStoryByName('SERVICE FOR ALLKIND', storiesData.general),
  ];

  const sideBySideConfig = {
    templateKey: 'sidebysideimage',
    title: 'SideBySideVariation1',
    sideBySideImageContainerStyle:
      'grid grid-cols-1 md:grid-cols-2 gap-0 md:py-30 p-0 bg-tertiary md:gap-8 md:py-4 md:px-4',
    reversed: true,
    ctaConfig: {
      baseStyle:
        'text-lg px-12 py-4 transition-all duration-1000 uppercase font-body',
      primaryFilledStyle:
        'bg-primary text-white border-2 border-light hover:text-primary  hover:text-white',
      tertiaryStyle:
        'bg-tertiary text-primary border-2 border-secondary text-dark hover:bg-secondary  hover:text-dark px-8 py-2',
      defaultStyle:
        'bg-tertiary text-primary border-4 border-primary font-bold text-dark hover:bg-primary  hover:text-tertiary ease-in-out duration-500',
    },
    contentConfig: {
      containerStyle:
        'bg-background flex flex-col items-center justify-center py-24 px-8',
      titleStyle:
        'text-primary font-display text-4xl md:text-5xl font-bold uppercase',
      subtitleStyle:
        'text-secondary font-display text-3xl md:text-4xl uppercase my-2',
      bodyContainerStyle:
        'font-bold my-2 mb-4 text-center max-w-lg mx-auto lg:text-lg',
    },
    imageConfig: {
      containerStyle: 'h-96',
      relativeContainerStyle: 'relative h-full w-full pb-100%',
      imageStyle: 'absolute top-0 left-0 w-full h-full object-cover',
    },
  };
  return (
    <section className='weddings weddings-page'>
      <LargeContentContainer
        story={findStoryByName('wedding-top', storiesData.general)}
        solidBg='#ffffff'
      />

      <SideBySideImage story={weddingStories[0]} config={sideBySideConfig} />
      <LargeContentContainer story={weddingStories[1]} />

      {/* Other content will go here */}

      <div className='py-12'>
        <ClickableBoxes
          stories={[
            weddingStories[3],
            weddingStories[4],
            weddingStories[5],
            weddingStories[6],
          ]}
          noClick
        />
      </div>

      <SideBySideImage
        story={weddingStories[7]}
        config={{ ...sideBySideConfig, reversed: false }}
      />
      <SideBySideImage
        story={weddingStories[8]}
        config={{ ...sideBySideConfig, reversed: true }}
      />

      <div className='py-4 md:mt-20 lg:mt-24'>
        <Reviews data={menuInventoryData[0]} />
      </div>

      <div className='large-content-wedding'>
        <LargeContentContainer story={weddingStories[2]} />
      </div>
      <div className='wedding-form-container'>
        <WeddingForm
          title='Book Your Dream Wedding at The Hops Company'
          text="Imagine saying 'I do' amidst cascading waterfalls, rustic charms, and the glow of fire pits, all set within our enchanting private garden. At The Hops Company, not only do we offer an unparalleled New England ambiance for your wedding, but we also indulge your guests with a diverse array of craft beers, ciders, wines, and signature cocktails. Conveniently located in Southern CT, our venue is a stone's throw away from major routes, making it the ideal destination for couples in Fairfield and New Haven County. Complete the form below and take the first step towards the wedding of your dreams."
        />
      </div>

      <div className='bg-primary py-10 px-4 min-h-[50vh] flex justify-center items-center'>
        <iframe
          className='w-full h-full min-h-[60vh]'
          title='vimeo-player'
          src='https://player.vimeo.com/video/871955694?h=1360022420'
          frameborder='0'
          allowfullscreen
        ></iframe>
      </div>

      <LargeContentContainer story={weddingStories[9]} />
      <section className='pb-4'>
        <h4 className='font-display font-bold text-3xl text-secondary md:text-5xl lg:text-6xl text-center uppercase mt-4 md:mt-6 '>
          Awards
        </h4>
        <RenderStoryImages stories={awards} />
      </section>

      <section className='pb-4 xl:pb-8'>
        <h4 className='font-display font-bold text-3xl text-secondary md:text-5xl lg:text-6xl text-center uppercase mt-4 md:mt-6 '>
          Featured In...
        </h4>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='my-4'>
            <a
              className='!py-4 mx-2'
              target='_blank'
              href='https://www.theknot.com/marketplace/redirect-993432?utm_source=vendor_website&utm_medium=banner&utm_term=5ce8ce68-7b7e-45df-a862-a68900dd9b5f&utm_campaign=vendor_badge_assets'
            >
              The Knot
            </a>
          </div>
          <div className='my-4'>
            <a
              className='!py-4 mx-2'
              rel='nofollow'
              target='_blank'
              href='https://www.weddingwire.com'
              title='weddingwire.com'
            >
              Wedding Wire
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WithLayout(Weddings);

export async function getStaticProps() {
  const {
    poweredImagesData,
    aboutData,
    galleryData,
    shoutData,
    storiesData,
    menuInventoryData,
  } = await fetchGoNationData({
    poweredImages: true,
    about: true,
    gallery: true,
    shout: true,
    stories: true,
    menuInventory: true,
    menuPL: 4,
  });
  return {
    props: {
      poweredImagesData,
      aboutData,
      galleryData,
      shoutData,
      storiesData,
      menuInventoryData,
    },
  };
}

import React from 'react';
import WithLayout from 'components/layout/WithLayout';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import extractStory from 'helpers/extractStory';
import buildAvatar from 'helpers/general/buildAvatar';

const News = ({ aboutData, poweredImagesData, storiesData }) => {
  const { press } = storiesData;
  return (
    <section className="min-h-screen p-4 xl:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {press.map(item => {
          const {
            firstImage,
            images,
            title,
            subtitle,
            linkAddress,
            linkTitle,
          } = extractStory(item);
          return (
            <div
              key={item.id}
              className="bg-background p-4 rounded shadow-md col-span-1 xl:col-span-2 flex xl:flex-row flex-col" // Adjusted for xl:col-span-2 and flex layouts
            >
              <img
                src={
                  images[0] ||
                  buildAvatar({
                    ...aboutData,
                  })
                }
                alt={item.title}
                className="mb-4 rounded xl:w-1/3 w-full xl:mr-4 xl:object-cover h-full" // Adjusted for xl width and margin
              />
              <div className="content flex-1">
                {' '}
                {/* Wrapped content inside a div */}
                <h3 className="text-primary font-display mb-2 text-xl sm:text-xl md:text-2xl font-bold">
                  {title}
                </h3>
                <p className="text-dark mb-8">{subtitle}</p>
                <a
                  href={linkAddress}
                  className="bg-dark text-primary border-primary border rounded px-8 py-2 uppercase hover:bg-transparent hover:text-dark transition-all duration-300"
                >
                  {linkTitle}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WithLayout(News);

export async function getStaticProps() {
  const { poweredImagesData, aboutData, galleryData, storiesData } =
    await fetchGoNationData({
      poweredImages: true,
      about: true,
      gallery: true,
      shout: true,
      stories: true,
    });
  return {
    props: {
      poweredImagesData,
      aboutData,
      galleryData,
      storiesData,
    },
  };
}

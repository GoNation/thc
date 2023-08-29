import React from 'react';
import PageHero from 'components/heros/PageHero';
import Layout from 'components/layout/layout';
import { Menu as GoNationMenu } from 'components/menu/Menu';
import { gonationId } from 'config';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import findPoweredImage from 'helpers/general/findPoweredImage';
import Container from 'components/ui/Container';

const Drinks = ({
  aboutData,
  poweredImagesData,
  menuInventoryData,
  shoutData,
}) => {
  return (
    <Layout
      business={aboutData}
      pageTitle="Drinks"
      shoutData={shoutData}
      poweredImagesData={poweredImagesData}
    >
      <div className="menu-wrap py-8">
        <Container size="large">
          <div className="lg:pb-32 ">
            <GoNationMenu
              gonationID={gonationId}
              businessData={aboutData}
              menuData={menuInventoryData[0]}
              mode={'tabs'}
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Drinks;

export async function getStaticProps() {
  const { poweredImagesData, aboutData, menuInventoryData, shoutData } =
    await fetchGoNationData({
      poweredImages: true,
      about: true,
      menuInventory: true,
      menuPL: 2,
      shout: true,
    });
  return {
    props: {
      poweredImagesData,
      aboutData,
      menuInventoryData,
      shoutData,
    },
  };
}

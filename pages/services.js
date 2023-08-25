import React from 'react';
import PageHero from 'components/heros/PageHero';
import Layout from 'components/layout/layout';
import Menu from 'components/menu/Menu';
import { gonationId } from 'config';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import findPoweredImage from 'helpers/general/findPoweredImage';
import Container from 'components/ui/Container';

const Menus = ({
  aboutData,
  poweredImagesData,
  menuInventoryData,
  shoutData,
}) => {
  const poweredImage = findPoweredImage('services-pagehero', poweredImagesData);

  return (
    <Layout business={aboutData} pageTitle="Services" shoutData={shoutData}>
      <PageHero img={poweredImage} pageTitle="Services" />
      <div className="menu-wrap py-8">
        <Container size="large">
          <div className="lg:pb-32 ">
            <Menu
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

export default Menus;

export async function getServerSideProps() {
  const { poweredImagesData, aboutData, menuInventoryData, shoutData } =
    await fetchGoNationData({
      poweredImages: true,
      about: true,
      menuInventory: true,
      menuPL: 1,
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

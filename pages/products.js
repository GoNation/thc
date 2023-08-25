import React from 'react';
import PageHero from 'components/heros/PageHero';
import Layout from 'components/layout/layout';
import Menu from 'components/menu/Menu';
import { businessId } from 'config';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import findPoweredImage from 'helpers/general/findPoweredImage';
import Container from 'components/ui/Container';

const Products = ({
  aboutData,
  poweredImagesData,
  menuInventoryData,
  shoutData,
}) => {
  const poweredImage = findPoweredImage('products-pagehero', poweredImagesData);

  return (
    <Layout business={aboutData} pageTitle="Products" shoutData={shoutData}>
      <PageHero img={poweredImage} pageTitle="Products" />
      <div className="menu-wrap py-8">
        <Container size="large">
          <div className="lg:pb-32 ">
            <Menu
              gonationID={businessId}
              businessData={aboutData}
              menuData={menuInventoryData[0]}
              mode={'allInOnce'}
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Products;

export async function getServerSideProps() {
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

import React from 'react';
import GoNationMenu from 'components/menu/Menu';
import { gonationId } from 'config';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Container from 'components/ui/Container';

import WithLayout from 'components/layout/WithLayout';

const Drinks = ({
  aboutData,
  poweredImagesData,
  menuInventoryData,
  shoutData,
}) => {
  return (
    <div className="menu-wrap py-8 bg-dark">
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
  );
};

export default WithLayout(Drinks);

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

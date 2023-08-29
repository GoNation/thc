import React, { useState } from 'react';
import Image from 'next/image';
import Price from './Price';
import PriceWithVariants from './PriceWithVariants';
import Lightbox from 'react-image-lightbox';
import makeSentancesCapital from 'helpers/general/makeSentanceCapital';

const MenuItem = ({
  item,
  type,
  withDollar,
  hasMenuImages,
  menuItemIndex,
  isSingleItem,
}) => {
  const [lightBox, setLightbox] = useState({
    isOpen: false,
    mainSrc: '',
  });

  const getMenuItemType = () => {
    switch (type) {
      case 'someCase':
      default:
        return defaultType();
    }
  };

  // When copying a menu, for some reason the string URL gets a -copy attached at the end of it. This function removes it.
  const removeImageCopy = img =>
    img.includes('copy') ? img.substring(0, img.length - 5) : img;

  const imageCopy = item.imageUrl.includes('copy')
    ? removeImageCopy(item.imageUrl)
    : item.imageUrl;

  const menuNameClassList =
    'menuItemName w-full block text-sm  text-white inline-flex font-body flex w-full justify-between';
  const descriptionClassList =
    'menuItemDescription  max-w-xs text-md font-light font-display font-bold font-body text-xs md:text-sm';
  const defaultType = () => (
    <div className="menuItemInnerContainer  m-auto w-full h-full relative ">
      <div className="absolute  h-full "></div>
      <div className="my-1">
        {lightBox.isOpen && (
          <Lightbox
            imageCaption={
              <div sx={{ height: '25px' }}>
                <p className="menuItemName">{item.name}</p>
              </div>
            }
            mainSrc={removeImageCopy(lightBox.mainSrc)}
            onCloseRequest={() => setLightbox({ isOpen: false })}
          />
        )}

        {item.photo_id ? (
          <div
            className="menuItemImageContainer"
            onClick={
              item.photo_id
                ? () =>
                    setLightbox({
                      isOpen: true,
                      mainSrc: item.imageUrl,
                    })
                : () => ''
            }
          >
            <div className="itemImageFill" />

            <Image
              className={`${
                item.photo_id ? 'menuItemImg' : 'menuItemImgDefault'
              } ${!item.photo_id} ? 'hidden' : ''`}
              width={800}
              height={800}
              src={item.photo_id ? imageCopy : ''}
              alt={item.name}
            />
          </div>
        ) : (
          ''
        )}

        <div className="menuItemContentContainer flex flex-wrap ">
          {item.variants.length === 1 && item.variants[0].label === '' ? (
            <div className="menuItemNamePriceContainer w-full">
              <p className={menuNameClassList}>
                <span>
                  {item.name} <span className=""></span>
                </span>
                <Price withDollar={true} variants={item.variants} toSide />{' '}
              </p>
              {item.desc && (
                <p className={descriptionClassList}>
                  {makeSentancesCapital(item.desc)}
                </p>
              )}
              {/* <Price withDollar={withDollar} variants={item.variants} toSide /> */}
            </div>
          ) : (
            <div className="flex-col items-center">
              <p className={menuNameClassList}>{item.name}</p>
              {item.desc && (
                <p className={descriptionClassList}>
                  {makeSentancesCapital(item.desc)}
                </p>
              )}
              <PriceWithVariants
                withDollar={withDollar}
                variants={item.variants}
                toSide
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`w-full   text-white md:w-1/2 md:mb-4`}>
      {getMenuItemType()}
    </div>
  );
};

export default MenuItem;

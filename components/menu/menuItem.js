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
    'menuItemName w-full block text-base  text-white inline-flex font-body flex w-full justify-between md:text-lg lg:text-xl font-bold';
  const descriptionClassList =
    'menuItemDescription  max-w-xs text-sm md:text-base xl:text-lg font-light font-display font-bold font-body';
  const toastLink =
    'https://order.toasttab.com/online/tacoloco-at-the-hops-company';
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
            <div className="flex-col items-center w-full">
              <p className={menuNameClassList}>
                {isToastTabActive() ? (
                  <div className="my-8">
                    <a
                      href={toastLink}
                      target="_blank"
                      className="bg-primary px-8 py-3 rounded-sm text-black font-semibold uppercase text-lg border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-500"
                    >
                      {item.name}
                    </a>
                  </div>
                ) : (
                  item.name
                )}
              </p>
              {item.desc && (
                <p className={descriptionClassList}>
                  {item.desc.toLowerCase().includes('https') ? (
                    <a
                      href={item.desc}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-primary underline hover:text-white w-full"
                    >
                      Click here to view the menu
                    </a>
                  ) : item.desc.match(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/) ? (
                    <a
                      href={`tel:${item.desc}`}
                      className="text-primary underline hover:text-white"
                    >
                      Call {item.desc}
                    </a>
                  ) : (
                    makeSentancesCapital(item.desc)
                  )}
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

  const isPhoneNumber = item.desc.match(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/);

  return (
    <div
      className={`w-full   text-white  ${
        isToastTabActive() || isPhoneNumber ? 'md:w-full' : 'md:w-full'
      } md:mb-4`}
    >
      {getMenuItemType()}
    </div>
  );

  function isToastTabActive() {
    return item.name.toLowerCase().includes('click here');
  }
};

export default MenuItem;

import React from 'react';
import MenuItem from './menuItem';
import shortid from 'shortid';
import slugify from 'slugify';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';

const AllIn = ({ menuData, setModalActive, onBackClick }) => {
  // Takes Nested sections and and gets the nested child items and child sections
  const splitSectionChildren = section => {
    return section.inventory.reduce(
      (acc, curr) => {
        if ('item' in curr) {
          acc.childItems.push(curr);
        } else if ('section' in curr) {
          acc.childSections.push(curr);
        }
        return acc;
      },
      { childItems: [], childSections: [] }
    );
  };

  // Recursively loop through menus and nested menus
  const renderMenu = (menu, nested, idx) => {
    const { section } = menu;
    const parsedSection = splitSectionChildren(menu);
    const removeSections = [];

    return (
      <div
        key={shortid.generate()}
        className={`allInContainer flex flex-wrap w-full  mt-4 ${slugify(
          section.name,
          {
            lower: true,
          }
        )}`}
      >
        <div
          className={`menuContainer text-left w-full  md:mx-4 grid-rows-3 grid-cols-2 py-2 ${
            removeSections.includes(section.name.toLowerCase()) ? '' : ''
          }`}
        >
          {section.name ? (
            <h4 className="text-2xl lg:text-3xl uppercase  text-left text-white font-bold  border-b border-primary font-display md:ml-0">
              <span>{section.name}</span>
            </h4>
          ) : (
            ''
          )}
          {section.desc ? (
            <p className="menuSectionDescription  text-light mb-4 mt-1 font-body text-xs max-w-lg text-left">
              {section.desc}
            </p>
          ) : (
            ''
          )}
          <div className="flex flex-wrap">
            {parsedSection.childItems.map(({ item }, index) => {
              return (
                <MenuItem
                  key={shortid.generate()}
                  type={'default'}
                  item={item}
                  isSingleItem={parsedSection.childItems.length === 1}
                  menuItemIndex={index}
                />
              );
            })}
          </div>
        </div>

        {/* child sections */}
        {parsedSection.childSections.map((childSection, idx) => {
          return renderMenu(childSection, true, idx);
        })}
      </div>
    );
  };

  return (
    <div className="allInContainerWrapper">
      {onBackClick ? (
        <button className="backToMenuBtn" onClick={() => onBackClick()}>
          ← Back
        </button>
      ) : (
        ''
      )}
      {renderMenu(menuData)}
    </div>
  );
};

export default AllIn;

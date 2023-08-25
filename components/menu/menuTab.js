import React, { useEffect } from 'react';

const MenuTab = ({
  section,
  inventory,
  setActiveSection,
  setDisplayedCellSection,
  isTabs,
  activeSection,
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  const isActive = activeSection.section._id === section._id;

  return (
    <div
      className={`flex-1 min-w-[221px] text-center px-4 md:py-5 font-bold py-3 md:m-2 text-xs uppercase cursor-pointer hover:bg-secondary hover:text-white transition-all duration-200 font-body   ${
        isActive
          ? 'bg-secondary  text-white'
          : 'bg-text-dark border-b-2 md:border-2 border-primary bg-background '
      }`}
      id="menuTab"
      onClick={() =>
        isTabs
          ? setActiveSection({ section, inventory })
          : setDisplayedCellSection({
              section,
              inventory,
            })
      }
    >
      {section.name}
    </div>
  );
};

export default MenuTab;

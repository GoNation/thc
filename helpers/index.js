import findPoweredImage from 'helpers/general/findPoweredImage';

const retrievePageHeroImage = (pathname, customPageHero, poweredImagesData) => {
  const pathNameWithoutSlash = pathname.replace('/', '');
  const foundImage = findPoweredImage(
    customPageHero || pathNameWithoutSlash,
    poweredImagesData
  );
  if (foundImage) {
    return foundImage;
  }
  return null;
};

// Helper function to filter stories by name
const filterStoriesByName = (stories, filterName) => {
  return stories?.general?.filter(
    story =>
      story.name?.toLowerCase()?.includes(filterName.toLowerCase()) &&
      story.media?.length
  );
};

// Helper function to sort stories by name's numeric part
const sortStoriesByNumericName = stories => {
  return stories?.sort((a, b) => {
    const numA = parseInt(a.name.match(/\d+/));
    const numB = parseInt(b.name.match(/\d+/));
    return numA - numB;
  });
};

// Combined function to filter and then sort
const filterAndSortStories = (stories, filterName) => {
  const filteredStories = filterStoriesByName(stories, filterName);
  return sortStoriesByNumericName(filteredStories);
};

function findPageData(routes, pathname) {
  return routes
    .reduce((acc, route) => {
      if (route.children) {
        acc = acc.concat(route.children);
      } else {
        acc.push(route); // Only push routes that don't have children
      }
      return acc;
    }, [])
    .find(route => route.path === pathname);
}

export { retrievePageHeroImage, filterAndSortStories, findPageData };

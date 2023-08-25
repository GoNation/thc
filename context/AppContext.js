import { createContext } from 'react';

const AppContext = createContext({
  business: {},
  storiesData: {},
  aboutData: {},
  shoutData: {},
  menuInventoryData: {},
  menuPLData: {},
  poweredImagesData: {},
});

export default AppContext;

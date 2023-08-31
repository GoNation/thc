const businessId = 'bzn-0bgGnwafSXSvWPNV1T0OYw';
const domain = 'thehopscompany.com';
const iframeURL =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11986.922256366732!2d-73.0520863!3d41.3147247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7dfa54b91a211%3A0xf4d467e609ebc6bb!2sTHC%20The%20Hops%20Company!5e0!3m2!1sen!2sus!4v1692990685852!5m2!1sen!2sus';
const iframe = `<iframe src="${iframeURL}" width="600" height="450" className="w-full h-full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
const primaryColor = '#C6AB86';
const secondaryColor = '#A1815B';
const tertiaryColor = '#020202';
const darkColor = '#181612';
const backgroundColor = '#FEFEFE';
const lightColor = '#E1DEDB';

const routes = [
  {
    name: 'Home', // This is the name that will appear in the navigation
    path: '/', // This is the path that will be used to build the URL
    pageDescription:
      'Visit THC The Hops Company in Derby CT for craft beers, gourmet food, and scenic wedding venues. Your ultimate beer garden experience is here.',
    customPageHero: 'home-pagehero', // This is the name of the image that will be used as the page hero. If not provided, we will attempt to find the page hero based on the page name.
    hidePageHero: true, // This will hide the page hero if set to true
    isPrimaryCalledToAction: false,
    hidden: true,
  },
  {
    name: 'About',
    path: '/about',
    isPrimaryCalledToAction: false,
    pageHero: 'about-pagehero',
    tag: 'discover',
    customPageHeroTitle: 'WELCOME TO THC',
    pageDescription:
      "Discover The Hops Company's ethos, our passion for beer, and the experience that sets us apart in Derby, CT. Dive into Connecticut's finest beer bar.",
    aboutStoryName: 'about-page-story',
  },

  {
    name: 'Menus',
    isPrimaryCalledToAction: false,
    url: '',

    children: [
      {
        name: 'On Tap',
        isPrimaryCalledToAction: false,
        pageHero: '',
        url: 'https://business.untappd.com/embeds/iframes/22705/86629',
        tag: 'menus',
      },
      {
        name: 'Drinks',
        isPrimaryCalledToAction: false,
        url: '',
        seoPageTitle: '',
        tag: 'menus',
        pageDescription:
          'Discover a range of drinks at THC, from signature mocktails to non-alcoholic beers. Elevate your palate with our curated beverages in Derby, CT.',

        path: '/drinks',
      },
      {
        name: 'Menu',
        isPrimaryCalledToAction: false,
        url: '',
        seoPageTitle: '',
        pageDescription:
          "Explore THC's gourmet Zuppardi’s Apizzas, fresh salads, and delectable desserts. Experience an unmatched dining journey in Derby, CT.",
        tag: 'menus',
        path: '/menu',
      },
    ],
  },

  {
    name: 'Events & Functions',
    isPrimaryCalledToAction: false,
    url: '',
    children: [
      {
        name: 'Events',
        isPrimaryCalledToAction: false,
        url: '',
        seoPageTitle: '',
        pageDescription:
          'Experience diverse events at THC, from live DJ nights to acoustic evenings and our signature brunch. Revel in top-notch entertainment in Derby, CT.',
        tag: 'discover',
        path: '/events',
      },
      {
        name: 'Private Events & Parties',
        isPrimaryCalledToAction: false,
        url: '',
        pageDescription:
          'Host your event at THC. From private functions to grand events, experience top-notch facilities and entertainment in Derby, CT.',
        tag: 'discover',
        path: '/private-events-and-parties',
      },
    ],
  },

  {
    name: 'Media',
    isPrimaryCalledToAction: false,
    url: '',
    children: [
      {
        name: 'News',
        isPrimaryCalledToAction: false,
        url: '',
        seoPageTitle: '',
        path: '/news',
      },
      {
        name: 'Gallery',
        isPrimaryCalledToAction: false,
        url: '',
        seoPageTitle: '',
        path: '/gallery',
      },
    ],
  },

  {
    name: 'Gift Cards',
    isPrimaryCalledToAction: false,
    url: 'https://swipeit.com/co-branded/merchant/the-hops-company-9639',
    seoPageTitle: '',
    tag: 'discover',
  },

  {
    name: 'Contact',
    isPrimaryCalledToAction: false,
    pageHero: 'Contact-heropage',
    seoPageTitle: '',
    tag: 'discover',
    path: '/contact',
    customPageHeroTitle: ' ',
  },
  {
    name: 'Weddings',
    isPrimaryCalledToAction: true,
    url: '',
    seoPageTitle: '',
    tag: 'discover',
    path: '/weddings',
  },
];

const filteredOutGalleryImages = [
  'Website photos',
  'website photos',
  'Website Photos',
  'shout',
  'shouts',
  'Shout',
  'Shouts',
];

const hardCodedAddressText = '';
const hardCodedAddressURL = '';

module.exports = {
  businessId,
  domain,
  routes,
  iframe,
  filteredOutGalleryImages,
  primaryColor,
  secondaryColor,
  lightColor,
  darkColor,
  backgroundColor,
  hardCodedAddressText,
  hardCodedAddressURL,
  tertiaryColor,
};

//

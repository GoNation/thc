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
    pageDescription: 'Welcome to our homepage', // This is the description that will appear in the <head> tag. If not provided, the business description will be used.
    customPageHero: 'home-pagehero', // This is the name of the image that will be used as the page hero. If not provided, we will attempt to find the page hero based on the page name.
    hidePageHero: true, // This will hide the page hero if set to true
    isPrimaryCalledToAction: false,
    hidden: true,
  },
  {
    name: 'About',
    isPrimaryCalledToAction: false,
    pageHero: 'about-pagehero',
    tag: 'discover',
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
        isPrimaryCalledToAction: true,
        url: '',
        seoPageTitle: '',
        tag: 'menus',
      },
      {
        name: 'Menu',
        isPrimaryCalledToAction: true,
        url: '',
        seoPageTitle: '',
        tag: 'menus',
      },
    ],
  },

  {
    name: 'Events & Functions',
    isPrimaryCalledToAction: true,
    url: '',
    children: [
      {
        name: 'Events',
        isPrimaryCalledToAction: true,
        url: '',
        seoPageTitle: '',
        tag: 'discover',
      },
      {
        name: 'Private Events & Parties',
        isPrimaryCalledToAction: true,
        url: '',
        seoPageTitle: '',
        tag: 'discover',
      },
      {
        name: 'Weddings',
        isPrimaryCalledToAction: true,
        url: '',
        seoPageTitle: '',
        tag: 'discover',
      },
    ],
  },

  {
    name: 'Media',
    isPrimaryCalledToAction: true,
    url: '',
    children: [
      {
        name: 'News',
        isPrimaryCalledToAction: true,
        url: '',
        seoPageTitle: '',
      },
      {
        name: 'Gallery',
        isPrimaryCalledToAction: true,
        url: '',
        seoPageTitle: '',
      },
    ],
  },

  {
    name: 'Gift Cards',
    isPrimaryCalledToAction: true,
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

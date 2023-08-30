import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/WithLayout';
import DetailsBox from 'components/contact/DetailsBox';
import ContactForm from 'components/contact/ContactForm';
import HoursDisplay from 'components/hours/hoursDisplay';
import Title from 'components/ui/Title';
import { iframe } from 'config';
import findPoweredImage from 'helpers/general/findPoweredImage';
import PageHero from 'components/heros/PageHero';
import GenericContactForm from 'components/contact/GenericContactForm';

const Contact = ({ aboutData, poweredImagesData, shoutData }) => {
  const poweredImage = findPoweredImage('contact-pagehero', poweredImagesData);
  const formBackground = findPoweredImage('contact-form', poweredImagesData);
  return (
    <Layout
      business={aboutData}
      pageTitle="Contact"
      shoutData={shoutData}
      poweredImagesData={poweredImagesData}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] md:col-span-2">
          <div
            dangerouslySetInnerHTML={{ __html: iframe }}
            className="w-full h-full"
          ></div>
          <div className="absolute top-0 left-0">
            <DetailsBox aboutData={aboutData} title={aboutData.name} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2 bg-dark pt-4">
          <div className="md:col-span-1">
            <GenericContactForm />
          </div>

          <div className="text-center md:col-span-1 flex justify-center items-center bg-light p-4">
            <div className="bg-white w-full h-full p-4 flex flex-col justify-center items-center text-lg lg:text-xl">
              <h4 className="font-display text-xl md:text-3xl uppercase xl:text-4xl">
                Hours
              </h4>
              <HoursDisplay {...aboutData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

export async function getStaticProps() {
  const { poweredImagesData, aboutData, shoutData } = await fetchGoNationData({
    poweredImages: true,
    about: true,
    shout: true,
  });
  return {
    props: {
      poweredImagesData,
      aboutData,
      shoutData,
    },
  };
}

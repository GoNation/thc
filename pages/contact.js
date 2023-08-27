import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Layout from 'components/layout/layout';
import DetailsBox from 'components/contact/DetailsBox';
import ContactForm from 'components/contact/ContactForm';
import HoursDisplay from 'components/hours/hoursDisplay';
import Title from 'components/ui/Title';
import { iframe } from 'config';
import findPoweredImage from 'helpers/general/findPoweredImage';
import PageHero from 'components/heros/PageHero';

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
      <PageHero img={poweredImage} pageTitle="Contact" />
      <div className="lg:flex  flex-wrap items-start">
        <div className="bg-lighter flex justify-center items-center flex-col py-8 px-4  lg:min-h-screen md:px-2  font-body lg:w-1/2">
          <DetailsBox aboutData={aboutData} title="" />
          <div className="my-4 text-center !text-dark">
            <Title>Hours</Title>
            <HoursDisplay {...aboutData} />
          </div>
        </div>
        <div
          className="p-4 lg:w-1/2"
          style={{
            backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)
        ), url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${formBackground?.cloudinaryId})`,
          }}
        >
          <h4 className="text-white text-center my-2 text-xl md:text-2xl">
            Please Complete the Form Below for Any Inquiry
          </h4>
          <ContactForm></ContactForm>
        </div>
        <div className="w-full">
          <div
            className="w-full   h-64 md:h-[350px]"
            dangerouslySetInnerHTML={{ __html: iframe }}
          ></div>
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

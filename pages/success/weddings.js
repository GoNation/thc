import React from 'react';
import Script from 'next/script';

import Winners from 'components/Winners';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import buildAvatar from 'helpers/general/buildAvatar';
import SuccessContent from 'components/SuccessContent';

export default function Weddings({ aboutData }) {
  return (
    <>
      <Script strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-862025666/ec6XCJ6R8-sYEMLvhZsD'});
        `}
      </Script>
      <SuccessContent
        illustration={Winners}
        title="Success!"
        bodyText="Thank you for your message! We will get back to you as soon as possible."
        buttonText="Go Home"
        buttonUrl="/"
        buttonClassList="" // add your custom classes here
        avatar={buildAvatar(aboutData)}
      />
    </>
  );
}

export async function getStaticProps() {
  const { aboutData } = await fetchGoNationData({
    about: true,
  });
  return {
    props: {
      aboutData,
    },
  };
}

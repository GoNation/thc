import React from 'react';
import getGoogleString from '../../helpers/printing/getGoogleString';
import printAddress from '../../helpers/printing/printAddress';
import Title from '../ui/Title';
import Phone from './Phone';
import SocialLInks from '../ui/SocialLinks';

const DetailsBox = ({ aboutData, title = 'Contact Us' }) => {
  const detailClassList = 'mb-3 text-lg text-dark';
  return (
    <div className="font-body text-white">
      <div className="text-center">
        <Title classList="mb-4">{title}</Title>
        <p className={detailClassList}>
          <a
            href={getGoogleString(aboutData)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {printAddress(aboutData)}
          </a>
        </p>
        <p className={detailClassList}>
          <Phone {...aboutData} />
        </p>
        <div className={detailClassList}>
          <div className="flex justify-center">
            <SocialLInks links={aboutData.links} fill="#000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBox;

import React from 'react';
import Link from 'next/link';

const SuccessContent = ({
  illustration: IllustrationComponent,
  title = 'Success!',
  bodyText,
  buttonText,
  buttonUrl = '/',
  buttonClassList = '',
  avatar,
}) => {
  return (
    <div className="min-h-[100vh] flex justify-start items-center flex-col p-8">
      {avatar && (
        <div className="bg-primary p-4 rounded">
          <img src={avatar} alt="Illustration" className="max-w-[75px]" />
        </div>
      )}
      <div className="p-8">
        {IllustrationComponent && <IllustrationComponent />}
      </div>
      <div className="text-center">
        <h2 className="font-display font-bold text-4xl uppercase">{title}</h2>
        <p className="font-body px-4 mt-4 mb-4">{bodyText}</p>
        <Link href={buttonUrl}>
          <button
            className={`bg-primary text-white uppercase border-2 border-white hover:text-dark px-8 py-2 md:py-4 md:px-12 ${buttonClassList}`}
          >
            {buttonText}
          </button>
        </Link>
      </div>
      <div className="absolute bottom-2">
        <Link
          href="https://www.gonation.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/gn-power-black.svg"
            alt="Powered by GoNation"
            className="w-40 pt-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default SuccessContent;

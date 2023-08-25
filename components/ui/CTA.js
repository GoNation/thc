import React from 'react';
import Link from 'next/link';

const CTA = ({
  children,
  url,
  primaryFilled,
  unset,
  classLis,
  tertiary = false,
}) => {
  const isExternalURL = url.toLowerCase().includes('.com');
  const target = isExternalURL ? '_blank' : '';

  const retrieveStyle = () => {
    if (primaryFilled) {
      return 'bg-primary font-body text-white border-2 border-light px-12 py-4 border-2 hover:text-primary  hover:text-white text-lg uppercase font-normal  transition-all duration-1000 text-center';
    }
    if (unset) {
      return '';
    }
    if (tertiary) {
      return 'bg-tertiary text-secondary text-lg  px-12 py-4 border-2 border-secondary font-body text-dark hover:bg-secondary  hover:text-dark transition-all duration-1000 uppercase';
    }
    return 'bg-secondary text-tertiary text-lg  px-12 py-4 border-2 border-secondary font-body text-dark hover:bg-primary  hover:text-white transition-all duration-1000 uppercase';
  };

  const style = retrieveStyle();

  return (
    <Link href={url} className="">
      <a
        rel={target.length ? 'noopener noreferrer' : ''}
        target={target}
        className={style}
      >
        {children}
      </a>
    </Link>
  );
};

export default CTA;

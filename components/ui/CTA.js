import React from 'react';
import Link from 'next/link';

const CTA = ({ children, url, primaryFilled, unset, tertiary }) => {
  const isExternalURL = url.toLowerCase().includes('.com');
  const target = isExternalURL ? '_blank' : '';

  const baseStyle =
    'text-lg px-12 py-4 transition-all duration-1000 uppercase font-body';
  const primaryFilledStyle =
    'bg-primary text-white border-2 border-light hover:text-primary  hover:text-white';
  const tertiaryStyle =
    'bg-tertiary text-primary border-2 border-secondary text-dark hover:bg-secondary  hover:text-dark px-8 py-2';
  const defaultStyle =
    'bg-tertiary text-primary border-4 border-primary font-bold text-dark hover:bg-primary  hover:text-tertiary ease-in-out duration-500 ';

  const style = unset
    ? baseStyle
    : primaryFilled
    ? primaryFilledStyle
    : tertiary
    ? tertiaryStyle
    : defaultStyle;

  return (
    <Link
      href={url}
      rel={target.length ? 'noopener noreferrer' : ''}
      target={target}
      className={style}
    >
      {children}
    </Link>
  );
};

export default CTA;

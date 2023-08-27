import React from 'react';
import CTA from './ui/CTA';
import Body from './ui/Body';

const ContentComponent = ({
  title,
  subtitle,
  body,
  linkTitle,
  linkAddress,
  reversed,
  styles = {},
}) => {
  // Merge default styles with provided styles

  return (
    <div
      className={`${styles.containerStyle} ${reversed ? 'order-first' : ''} `}
    >
      <h4 className={styles.titleStyle}>{title}</h4>
      {subtitle && <h5 className={finalStyles.subtitle}>{subtitle}</h5>}
      <div className={`${styles.bodyContainerStyle}`}>
        <Body body={body} />
      </div>
      {linkTitle && linkAddress && (
        <CTA url={linkAddress} tertiary>
          {linkTitle}
        </CTA>
      )}
    </div>
  );
};

export default ContentComponent;

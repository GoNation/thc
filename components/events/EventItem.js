import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import EventDate from './EventDate';
import EventDays from './EventDays';
import cloudinaryString from '../../helpers/cloudinary/cloudinaryString';
import Image from 'next/image';
import Title from '../ui/Title';
import { useRouter } from 'next/router';

export default function EventItem({ event, variantName }) {
  const {
    _id,
    name,
    starts,
    ends,
    description,
    imageBaseUrl,
    imageurl,
    imagePrefix,
    ctas,
  } = event;

  const router = useRouter();

  const isDetailVisible = router.asPath.endsWith(`#${_id}`);

  const handleEventClick = () => {
    router.push(`/events#${_id}`);
  };

  return (
    <div
      key={_id}
      className={`eventItemContainer ${_id} relative overflow-hidden cursor-pointer`}
      onClick={handleEventClick}
    >
      <Image
        width={1000}
        height={750}
        className="eventImg object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110" // Added the transform hover:scale-110 for zoom effect
        src={cloudinaryString(imageBaseUrl, imagePrefix, 1000)}
        alt={name}
      />
      {/* Removed the Title component */}

      {/* Adjusted the h4 styling */}
      <h4 className="text-white font-display text-4xl uppercase md:text-5xl lg:text-6xl absolute inset-0 flex items-center justify-center text-shadow p-2 text-center">
        {name}
      </h4>

      {isDetailVisible && (
        <div className="eventDetailOverlay absolute inset-0 bg-dark opacity-90 flex flex-col p-4">
          <div className="eventItemContent text-lg text-white">
            <h4 className="text-white font-display text-4xl uppercase md:text-5xl lg:text-6xl justify-start    mb-2">
              {name}
            </h4>
            <div className="eventItemDateContainer flex flex-col items-start text-white">
              {event.eventDays ? (
                <EventDays
                  eventDays={event.eventDays}
                  variantName={variantName}
                />
              ) : (
                <EventDate date={starts} variantName={variantName} />
              )}
            </div>
            <p className="eventTime text-left my-2 text-white text-xl md:text-2xl lg:text-3xl">
              {`${dayjs(starts).format('h:mm A')}`} -{' '}
              {`${dayjs(ends).format('h:mm A')}`}
            </p>
            <p className="eventItemDescription text-white max-w-md text-lg md:text-xl lg:text-2xl">
              {description}
            </p>
            {ctas && (
              <div className="eventCTABtns flex">
                {Object.keys(ctas).map(ctaName => {
                  if (ctas[ctaName]) {
                    return (
                      <Link
                        key={ctas[ctaName]}
                        href={ctas[ctaName]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="font-bold tracking-wide uppercase mt-12 cursor-pointer hover:text-primary">
                          {ctaName}
                        </span>
                      </Link>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

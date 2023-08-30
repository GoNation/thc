import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import left and right quote marks from react icons
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Reviews({ data = {} }) {
  const { inventory } = data;

  return (
    <Carousel showStatus={false} autoPlay loop showThumbs={false}>
      {inventory
        ?.filter(itm => itm)
        .map(itm => (
          <div
            key={itm.item.item_id}
            className="relative max-w-3xl mx-auto px-8 md:px-0"
          >
            <h4 className="font-wedding text-forestGreen text-4xl text-center">
              Testimonial From
            </h4>
            <div className="absolute -top-12 md:top-0 left-4">
              <FaQuoteLeft size={42} color="#4F7942" />
            </div>

            <p className="mb-8 max-w-3xl m-auto font-bold font-body  text-lg px-4   text-dark">
              {itm.item.name}
            </p>
            <p className="mb-8 max-w-xl m-auto text-base italic font-body px-4   text-dark">
              {itm.item.desc}
            </p>
            <div className="absolute -bottom-10 right-4 ">
              <FaQuoteRight size={42} color={'#4F7942'} />
            </div>
          </div>
        ))}
    </Carousel>
  );
}

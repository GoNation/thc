import React, { useEffect } from "react";
import { reservationsWidget } from "config";

const ReservationWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = `//${reservationsWidget}`;
    script.async = true;

    const injectLocation = document.querySelector(".inject");
    if (injectLocation) {
      injectLocation.appendChild(script);
    }
    return () => {
      if (injectLocation) {
        injectLocation.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* <div className="h-[100px]"></div> */}
      <section className="py-16">
        <div className="inject" align="center"></div>
      </section>
    </>
  );
};

export default ReservationWidget;

import GradientButton from 'components/GradientButton';
import { useState } from 'react';
import { FaExpand } from 'react-icons/fa';

function ExpandableShout({
  data = {
    title: '30th Annual Oktober Fest:',
    text: 'Come join us for our 2nd annual Oktoberfest! We will have live music, food, and drinks! Tickets are $10 and can be purchased at the door.',
    buttonText: 'Buy Tickets',
    imageUrl:
      'https://images.unsplash.com/photo-1586993451228-09818021e309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    timeInfo: 'Shouted 42 minutes ago',
  },
  isExpandable = true,
}) {
  const [expanded, setExpanded] = useState(!isExpandable);
  const [imageExpanded, setImageExpanded] = useState(false);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  const handleImageClick = () => {
    if (isExpandable) {
      setImageExpanded(!imageExpanded);
    } else {
      setLightboxVisible(true);
    }
  };

  const expandedView = (
    <div className="relative md:max-w-none mx-auto flex flex-col md:flex-row items-start md:items-center ">
      <div className="relative order-2 md:order-1">
        <img
          className={`order-2 md:order-1 ${
            imageExpanded ? 'w-full ' : 'w-1/2'
          } md:my-0 md:w-full md:max-h-[400px] lg:max-h-[550px] xl:max-h-[600px] 2xl:max-h-[800px]`}
          src={data.imageUrl}
          alt=""
          onClick={() => handleImageClick()}
        />
      </div>
      <div className="md:pr-8 sm:max-w-md md:max-w-none order-1 md:order-1 mb-8 md:mb-0 md:px-8 lg:px-16">
        <p className="font-bold inline text-4xl sm:text-4xl lg:text-5xl 2xl:text-7xl leading-3 text-primary font-display">
          {data.title} <br />
        </p>
        <p className="text-lg md:text-xl my-2 md:my-6 text-primary font-bold max-w-2xl">
          {data.text}
        </p>

        <button className="bg-transparent text-primary py-2 px-8 font-bold uppercase text-base mt-2 border-primary border-2 md:hidden">
          {data.buttonText}
        </button>
        <GradientButton buttonText={data.buttonText} />
      </div>
    </div>
  );

  return (
    <div
      className={`relative p-6 md:p-0 lg:p-0  w-full 0 ${
        expanded && 'py-12'
      } relative`}
      style={{
        backgroundImage: `url(https://media.discordapp.net/attachments/1063886480394690592/1144834987661725766/esmith7196_Capture_a_high-quality_photograph_of_a_rich_and_text_3ded2088-2032-4fc6-82f7-99c6feb728cc.png?width=1626&height=1084)`,
        backgroundSize: 'cover',
      }}
    >
      <div className="bg-[#492107] absolute left-0 top-0 w-full h-full bg-opacity-80"></div>
      <p className="absolute bottom-1 right-1 text-xs italic text-secondary">
        {data.timeInfo}
      </p>
      {expanded ? (
        expandedView
      ) : (
        <p className="">
          <span className="font-bold inline text-xs transition-all duration-1000 text-white">
            {data.title}{' '}
          </span>
          <span className="whitespace-pre-line inline text-xs">
            {data.text.substring(0, 38)}...
            <span
              className="underline cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            >
              <br /> View Shout
            </span>
          </span>
        </p>
      )}
      {lightboxVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-90 flex justify-center items-center z-50 p-12 sm:p-24 "
          onClick={() => setLightboxVisible(false)}
        >
          <div className=" max-h-full flex flex-col items-center justify-center">
            <img
              className="h-auto  object-contain mb-8 border-2 md:max-h-[500px]"
              src={data.imageUrl}
              alt=""
            />
            <div className="text-center text-white absolute bottom-4 max-w-sm  md:max-w-lg bg-black py-1">
              <h3 className="font-bold text-white">{data.title}</h3>
              <p className="text-white text-xs">{data.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpandableShout;

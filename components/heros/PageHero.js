import Link from 'next/link';
const PageHero = props => {
  const { withLogo } = props;
  if (!props?.img?.cloudinaryId) {
    return <div className=""></div>;
  }
  return (
    <div className="h-screen">
      <div
        className="h-4/5 bg-cover flex justify-center items-center relative  p-4 flex-col"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%),
  		url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${props.img.cloudinaryId})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute  left-0 w-full h-1/2 bottom-0 "></div>
        {withLogo && (
          <div className="flex justify-center items-center mb-20">
            <Link href={'/'}>
              <a>
                <img src="/logo.png" className="max-w-[380px] w-full " />
              </a>
            </Link>
          </div>
        )}
        <h1 className="relative  text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-display  font-bold flex justify-center items-center uppercase mt-16 lg:mt-52  text-center">
          {props.pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default PageHero;

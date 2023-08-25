import Link from 'next/link';
const PageHero = props => {
  const { withLogo } = props;
  if (!props?.img?.cloudinaryId) {
    return <div className="my-24"></div>;
  }
  return (
    <div
      className="h-[400px] md:h-[575px] lg:h-[600px] bg-cover flex justify-end items-center relative  p-4 flex-col"
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
      <h1 className="relative  text-2xl md:text-4xl text-white font-display px-8 py-4 border-white border-4 font-lighter bg-primary flex justify-center items-center uppercase">
        {props.pageTitle}
      </h1>
    </div>
  );
};

export default PageHero;

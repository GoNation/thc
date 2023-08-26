import { motion } from 'framer-motion';
import Link from 'next/link';
import slugify from 'slugify';
import Image from 'next/image';

import { routes } from 'config';
import printAddress from 'helpers/printing/printAddress';

function MobileNavigation({ navVariants, business, logo }) {
  const animatedClassName =
    'lg:hidden fixed top-0 left-0 w-full w-full h-screen bg-secondary';
  const mobileLogoSize = 64;
  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={navVariants}
      className={animatedClassName}
    >
      <div className="mt-auto py-8 px-6 text-xs md:text-base flex justify-start items-start">
        {/* <p className="mb-2">
            <span className="font-bold">Phone:</span> {business.phone}
          </p>
          <p className="mb-4">
            <span className="font-bold">Address:</span> {printAddress(business)}
          </p> */}
        <div className="md:hidden ">
          <Link href="/" className="absolute top-10 left-8">
            <Image
              src={logo}
              width={mobileLogoSize}
              height={mobileLogoSize}
            ></Image>
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href="/">
            <Image src={logo} width={150} height={150}></Image>
          </Link>
        </div>
      </div>
      <div className=" h-4/5 overflow-y-auto  flex flex-col items-center justify-between ">
        {routes.map(route => (
          <Link
            className="text-white font-display font-bold uppercase  text-3xl  mini:text-xl"
            key={slugify(route.name, {
              lower: true,
            })}
            href={
              route.url ||
              slugify(route.name, {
                lower: true,
              })
            }
            passHref
          >
            {route.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default MobileNavigation;

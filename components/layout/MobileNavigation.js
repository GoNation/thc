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
          <Link href="/" className="absolute top-10 left-8">
            <Image src={logo} width={120} height={120}></Image>
          </Link>
        </div>
      </div>
      <div className=" h-4/5  overflow-y-auto  flex flex-col items-center justify-start md:mt-8">
        {routes
          .reduce((acc, route) => {
            if (route.children) {
              acc = acc.concat(route.children);
            } else {
              acc.push(route); // Only push routes that don't have children
            }
            return acc;
          }, [])
          .map(route => (
            <Link
              className="text-white font-display font-bold uppercase  text-2xl  sm:text-5xl mb-2 md:mb-8"
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

import { motion } from 'framer-motion';
import Link from 'next/link';
import slugify from 'slugify';
import Image from 'next/image';

import { routes } from 'config';
import printAddress from 'helpers/printing/printAddress';

function MobileNavigation({ navVariants, business, logo }) {
  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={navVariants}
      className="lg:hidden fixed top-0 left-0 w-8/12 h-screen bg-background border-l-4 border-b-4 border-tr-lg shadow-2xl "
    >
      <div className="h-full overflow-y-auto">
        {routes.map(route => (
          <Link
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

        {/* Placeholder for phone number and address */}
        <div className="mt-auto py-4 px-6 text-xs md:text-base">
          <p className="mb-2">
            <span className="font-bold">Phone:</span> {business.phone}
          </p>
          <p className="mb-4">
            <span className="font-bold">Address:</span> {printAddress(business)}
          </p>
          <div className="md:hidden">
            <Link href="/">
              <Image src={logo} width={50} height={50}></Image>
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/">
              <Image src={logo} width={150} height={150}></Image>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MobileNavigation;

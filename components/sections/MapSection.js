import DetailsBox from 'components/contact/DetailsBox';
import { iframe } from 'config';

const MapSection = ({ aboutData }) => (
  <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] md:col-span-2">
    <div
      dangerouslySetInnerHTML={{ __html: iframe }}
      className="w-full h-full"
    />
    <div className="absolute top-0 left-0">
      <DetailsBox aboutData={aboutData} title={aboutData.name} />
    </div>
  </div>
);

export default MapSection;

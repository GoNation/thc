import findStoryByName from 'helpers/findStoryByName';
import SideBySideImage from 'components/story-components/SideBySideImage';
import LargeContentContainer from 'components/story-components/LargeContentContainer';

const StorySection = ({ storiesData, filesData }) => (
  <section>
    {console.log(storiesData)}
    <div className="relative">
      <img
        src="/ripple.svg"
        alt=""
        className="absolute top-0 md:-top-1 w-full z-10 left-0 right-0"
      />
      <SideBySideImage
        config={filesData[0]}
        story={findStoryByName('Homepage story 2', storiesData)}
      />
    </div>
    <SideBySideImage
      config={filesData[2]}
      story={findStoryByName('Homepage story 3', storiesData)}
    />
    <SideBySideImage
      config={filesData[0]}
      story={findStoryByName('Homepage story 4', storiesData)}
    />
    <LargeContentContainer
      story={findStoryByName('Homepage story 5', storiesData)}
    />
  </section>
);

export default StorySection;

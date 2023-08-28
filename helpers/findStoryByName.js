const findStoryByName = (name = '', storiesData) =>
  storiesData.find(story =>
    story.name.toLowerCase().includes(name.toLowerCase())
  );

export default findStoryByName;

const findStoryByName = (name = '', storiesData) =>
  storiesData.find(
    story =>
      trimTrailingWhitespace(story.name).toLowerCase() === name.toLowerCase()
  );

export default findStoryByName;

// functio to trip trailing whitespace from a string
function trimTrailingWhitespace(string) {
  return string.replace(/\s*$/, '');
}

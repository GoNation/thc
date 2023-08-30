const findStoryByName = (name = '', storiesData) =>
  storiesData.find(story => {
    console.log(story.name);
    return (
      trimTrailingWhitespace(story.name).toLowerCase() === name.toLowerCase()
    );
  });

export default findStoryByName;

// functio to trip trailing whitespace from a string
export function trimTrailingWhitespace(string) {
  return string.replace(/\s*$/, '');
}

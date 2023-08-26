export default (imgID, data) => {
  const imgIdWords = imgID.toLowerCase().split('-');

  return data.find(img => {
    const poweredIdLower = img.poweredId.toLowerCase();
    const poweredIdWords = poweredIdLower.split('-');

    return (
      imgIdWords.some(word => poweredIdLower.includes(word)) ||
      poweredIdWords.some(word => imgID.toLowerCase().includes(word))
    );
  });
};

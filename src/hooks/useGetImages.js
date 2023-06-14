import images from "../assets/cards/index";

const useGetImages = (quantity) => {
  const mixedImages = images.sort(() => getRandomNumber());
  const selectedImages = [];

  for (let i = 0; i < quantity; i++) {
    selectedImages.push([i, mixedImages[i]]);
    selectedImages.push([i, mixedImages[i]]);
  }

  return selectedImages.sort(() => getRandomNumber());
};

const getRandomNumber = (upperLimit) => {
  return upperLimit
    ? Math.floor(Math.random() * upperLimit) + 1
    : Math.random() - 0.5;
};

export default useGetImages;

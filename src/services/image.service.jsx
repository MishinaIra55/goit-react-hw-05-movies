import image from 'services/no-image.png';

export const imageSrc = (width, path) => {
  if (!path) {

    return image;
  }
  return `https://image.tmdb.org/t/p/w${width}${path}`;
};

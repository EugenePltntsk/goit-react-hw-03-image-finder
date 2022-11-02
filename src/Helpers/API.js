import axios from 'axios';

export const searchImages = async function (imageName, page) {
  const { data } = await axios.get(
    `https://pixabay.com/api/?key=30313621-ff7fe66ba11e046cf69a4fc60&q=${imageName}&image_type=photo&per_page=12&page=${page}`
  );
  return data;
};

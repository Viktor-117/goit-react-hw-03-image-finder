import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
// const KEY = '29668324-2d81c9a891a84ad6e09e5568c';

export const addImages = async imgName => {
  const response = await axios.post('/api', imgName);
  return response.data;
};

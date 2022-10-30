import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const addImages = async imgName => {
  const response = await axios.post('/api', imgName);
  return response.data;
};

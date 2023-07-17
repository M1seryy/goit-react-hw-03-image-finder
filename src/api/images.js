import axios from 'axios';

export const getImagesBySearch = async (search, page) => {
  const API_KEY = `36745882-9a469cd98fdea02c7a63719ef`;
  axios.defaults.baseURL = `https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const { data } = await axios();
  return data;
};

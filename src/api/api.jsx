import axios from 'axios';

const apiUrl = 'https://65081e7f56db83a34d9bc7cd.mockapi.io/adverts';

const getAllCars = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    throw error;
  }
};

export default getAllCars;
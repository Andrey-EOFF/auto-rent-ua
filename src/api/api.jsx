import axios from "axios";

const apiUrl = "https://65081e7f56db83a34d9bc7cd.mockapi.io/adverts";

const fetchCars = async (page = 1, carsPerPage = 10) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        page: page,
        limit: carsPerPage,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    throw error;
  }
};

export default fetchCars;

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/items';

export const getItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching items', error);
    throw error;
  }
};

export const addItem = async (item) => {
  try {
    const response = await axios.post(API_URL, item);
    return response.data;
  } catch (error) {
    console.error('Error adding item', error);
    throw error;
  }
};

export const updateItem = async (id, item) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, item);
    return response.data;
  } catch (error) {
    console.error('Error updating item', error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting item', error);
    throw error;
  }
};

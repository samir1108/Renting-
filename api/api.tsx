import axios from 'axios';

// Base configuration for your API
const apiClient = axios.create({
  baseURL: 'https://your-api-url.com/api/v1', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example: Function to get user data
export const getUserData = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Example: Function to create a new post
export const createPost = async (postData) => {
  try {
    const response = await apiClient.post('/posts', postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// Example: Function to update a post
export const updatePost = async (postId, updatedData) => {
  try {
    const response = await apiClient.put(`/posts/${postId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};

// Add more API functions as needed...

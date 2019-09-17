import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID f1642fc91efdf7fdb86e50b06ab4d8ae59d2a4af7864d69a441f1ed2d33a40b0'
  }
});

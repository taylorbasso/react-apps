import axios from 'axios';

const API_KEY = 'AIzaSyDCMib72x3Sd44R_Ai3uJAf1o1FhUK1mF0';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY
  }
});

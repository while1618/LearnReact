import axios from "axios";

const KEY = "AIzaSyCn5LxmXRhLFFSgmKdFPF8olJE1z5CqSsg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});

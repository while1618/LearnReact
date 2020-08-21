import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID g7y9jT8Vojgvqw3dl3r4LRidLaB1lUA7D4pnqF16ALU"
  }
});

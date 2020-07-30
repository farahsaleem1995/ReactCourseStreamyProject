import axios from "axios";

class StreamsAPI {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3001",
    });
  }

  postStreamAsync = async (data) => {
    return this.api.post("/streams", data);
  };

  getStreamsAsync = async () => {
    return this.api.get("/streams");
  };

  getStreamByIdAsync = async (id) => {
    return this.api.get(`/streams/${id}`);
  };

  editStreamAsync = async (id, data) => {
    return this.api.patch(`/streams/${id}`, data);
  };

  deleteStreamAsync = async (id) => {
    return this.api.delete(`/streams/${id}`);
  };
}

export default new StreamsAPI();

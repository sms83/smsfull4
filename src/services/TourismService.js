import http from "./http-common";

const getAll = () => {
  return http.get("/tutorials");
};

const create = (data) => {
  return http.post("/packages", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const findByTitle = (title) => {
  return http.get(`/tutorials?title=${title}`);
};

const TourismService = {
  getAll,
  create,
  update,
  findByTitle,
};

export default TourismService;

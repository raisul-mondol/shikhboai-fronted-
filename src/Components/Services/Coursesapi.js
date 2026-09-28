import api from "./Api";

export const getCourses = async () => {
  const response = await api.get("/db.json");

  return response.data.courses;
};
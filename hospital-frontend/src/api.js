import axios from "axios";

const API_BASE_URL = "/api";

export const fetchHospitals = async (city) => {
  const response = await axios.get(`${API_BASE_URL}?city=${city}`);
  return response.data;
};

export const createHospital = async (hospitalData) => {
  const response = await axios.post(`${API_BASE_URL}/create`, hospitalData);
  return response.data;
};

export const getHospitalDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const updateHospital = async (id, updatedData) => {
  const response = await axios.put(`${API_BASE_URL}/update?id=${id}`, updatedData);
  return response.data;
};

export const deleteHospital = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/delete?id=${id}`);
  return response.data;
};

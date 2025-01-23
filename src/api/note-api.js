import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export const create =  async(note) => {
  return (await axios.post(`${BASE_URL}`, note)).data
};

export const fetchAll = async () => {
  return (await axios.get(`${BASE_URL}`)).data
};

export const fetchById = async(noteId) => {
  return (await axios.get(`${BASE_URL}/${noteId}`)).data
};

export const deleteById = async(noteId) => {
  return (await axios.delete(`${BASE_URL}/${noteId}`)).data
};

export const updateById = async(noteId, noteData) => {
  return (await axios.patch(`${BASE_URL}/${noteId}`, noteData)).data
};

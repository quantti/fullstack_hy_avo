import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = (person) => {
  return axios.post(baseUrl, person)
}

const update = (id, person) => {
  return axios.put(`${baseUrl}/${id}`, person)
}

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const getOne = id => {
  return axios.get(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deletePerson, getOne }
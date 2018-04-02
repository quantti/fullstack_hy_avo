import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

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

export default { getAll, create, update, deletePerson }
window.Class = {
  index() {
    return axios.get(`${baseURL}/classes`)
  },
  show(id) {
    return axios.get(`${baseURL}/classes/${id}`)
  },
  getRoster(id) {
    return axios.get(`${baseURL}/classes/${id}/students`)
  },
  create(body) {
    return axios.post(`${baseURL}/classes/`, body)
  },
  update(id, body) {
    return axios.put(`${baseURL}/classes/${id}`, body)
  },
  delete(id) {
    return axios.delete(`${baseURL}/classes/${id}`)
  }
}
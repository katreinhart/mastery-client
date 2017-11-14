window.Teachers = {
  index() {
    return axios.get(`${baseURL}/teachers`)
  },
  show(id) {
    return axios.get(`${baseURL}/teachers/${id}`)
  }, 
  create(body) {
    return axios.post(`${baseURL}/teachers`, body)
  },
  update(id, body) {
    return axios.put(`${baseURL}/teachers/${id}`, body)
  },
  delete(id) {
    return axios.delete(`${baseURL}/teachers/${id}`)
  }
}
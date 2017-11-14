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
  delete(id) {
    return axios.delete(`${baseURL}/teachers/${id}`)
  }
}
window.Course = {
  index () {
    return axios.get(`${baseURL}/courses`)
  },
  getOne(id) {
    return axios.get(`${baseURL}/courses/${id}`)
  },
  create(body) {
    return axios.post(`${baseURL}/courses`, body)
  },
  update(id, body) {
    return axios.put(`${baseURL}/courses/${id}`, body)
  },
  delete(id) {
    return axios.delete(`${baseURL}/courses/${id}`)
  }
}
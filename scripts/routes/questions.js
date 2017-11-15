window.Question = {
  index() {
    return axios.get(`${baseURL}/questions`)
  },
  show(id) {
    return axios.get(`${baseURL}/questions/${id}`)
  },
  update(id, body) {
    return axios.put(`${baseURL}/questions/${id}`, body)
  },
  delete(id) {
    return axios.delete(`${baseURL}/questions/${id}`)
  }
}
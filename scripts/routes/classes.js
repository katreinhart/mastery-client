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
  }
}
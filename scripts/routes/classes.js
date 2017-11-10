window.Class = {
  index() {
    return axios.get(`${baseURL}/classes`)
  },
  show(id) {
    return axios.get(`${baseURL}/classes/${id}`)
  }
}
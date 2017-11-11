window.Teachers = {
  index() {
    return axios.get(`${baseURL}/teachers`)
  },
  show(id) {
    return axios.get(`${baseURL}/teachers/${id}`)
  }
}
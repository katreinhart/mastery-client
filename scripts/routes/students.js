window.Student = {
  index() {
    return axios.get(`${baseURL}/students`)
  },
  show(id) {
    return axios.get(`${baseURL}/students/${id}`)
  }
}
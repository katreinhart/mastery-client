window.Course = {
  index () {
    return axios.get(`${baseURL}/courses`)
  },
  getOne(id) {
    return axios.get(`${baseURL}/courses/${id}`)
  }
}
window.Class = {
  index() {
    return axios.get(`${baseURL}/classes`)
  }
}
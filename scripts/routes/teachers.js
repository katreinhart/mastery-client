window.Teachers = {
  index() {
    return axios.get(`${baseURL}/teachers`)
  }
}
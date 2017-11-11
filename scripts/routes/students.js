window.Student = {
  index() {
    return axios.get(`${baseURL}/students`)
  },
  show(id) {
    return axios.get(`${baseURL}/students/${id}`)
  },
  update(id, body) {
    return axios.put(`${baseURL}/students/${id}`, body)
  },
  
}
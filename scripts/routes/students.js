window.Student = {
  index() {
    return axios.get(`${baseURL}/students`)
  },
  show(student_id) {
    return axios.get(`${baseURL}/students/${student_id}`)
  },
  update(student_id, body) {
    return axios.put(`${baseURL}/students/${student_id}`, body)
  },
  
}
window.ClassStudent = {
  create(classId, body) {
    return axios.post(`${baseURL}/classes/${classId}/students/`, body)
  },
  index(classId) {
    return axios.get(`${baseURL}/classes/${classId}/students`)
  }
}
window.ClassStudent = {
  create(classId, body) {
    return axios.post(`${baseURL}/classes/${classId}/students/`, body)
  }
}
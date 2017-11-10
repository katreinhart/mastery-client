window.UnitLesson = {
  index(unitID) {
    return axios.get(`${baseURL}/units/${unitID}/lessons`)
  },
  show(unitID, lessonID) {
    return axios.get(`${baseURL}/units/${unitID}/lessons/${lessonID}`)
  },
  create(unitID, body) {
    return axios.post(`${baseURL}/units/${unitID}/lessons/`, body)
  },
  update(unitID, lessonID, body) {
    return axios.put(`${baseURL}/units/${unitID}/lessons/${lessonID}`, body)
  },
  delete(unitID, lessonID) {
    return axios.delete(`${baseURL}/units/${unitID}/lessons/${lessonID}`)
  }
}
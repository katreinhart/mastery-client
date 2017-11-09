window.UnitLesson = {
  index(unitID) {
    return axios.get(`${baseURL}/units/${unitID}/lessons`)
  },
  show(unitID, lessonID) {
    return axios.get(`${baseURL}/units/${unitID}/lessons/${lessonID}`)
  }
}
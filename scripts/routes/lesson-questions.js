window.LessonQuestion = {
  index(lessonId) {
    return axios.get(`${baseURL}/lessons/${lessonId}/questions`)
  },
  getMC(lessonId, questionId) {
    return axios.get(`${baseURL}/lessons/${lessonId}/questions/mc/${questionId}`)
  },
  getSA(lessonId, questionId) {
    return axios.get(`${baseURL}/lessons/${lessonId}/questions/sa/${questionId}`)
  },
  createMC(lessonId, body) {
    return axios.post(`${baseURL}/lessons/${lessonId}/questions/mc/`, body)
  },
  createSA(lessonId, body) {
    return axios.post(`${baseURL}/lessons/${lessonId}/questions/sa/`, body)
  }
}

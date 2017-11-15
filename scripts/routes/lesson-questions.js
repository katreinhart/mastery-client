window.LessonQuestion = {
  index(lessonId) {
    return axios.get(`${baseURL}/lessons/${lessonId}/questions`)
  },
  show(lessonId, questionId) {
    return axios.get(`${baseURL}/lessons/${lessonId}/questions/mc/${questionId}`)
  },
  create(lessonId, body) {
    return axios.post(`${baseURL}/lessons/${lessonId}/questions/`, body)
  }
}

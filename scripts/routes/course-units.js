window.CourseUnit = {
  index(course_id) {
    return axios.get(`${baseURL}/courses/${course_id}/units`)
  },
  show(course_id, unit_id) {
    return axios.get(`${baseURL}/courses/${course_id}/units/${unit_id}`)
  },
  create(course_id, body) {
    return axios.post(`${baseURL}/courses/${course_id}/units/`, body)
  },
  update(course_id, unit_id, body) {
    return axios.put(`${baseURL}/courses/${course_id}/units/${unit_id}`, body)
  },
  delete(course_id, unit_id) {
    return axios.delete(`${baseURL}/courses/${course_id}/units/${unit_id}`)
  }
}
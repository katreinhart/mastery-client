nav.init()

displayCourseForm = () => {
  document.getElementById('main-content').innerHTML = courseFormTemplate('POST')
  document.getElementById('create').addEventListener('submit', () => {
    const title = document.getElementById('courseTitle').value
    const description = document.getElementById('courseDescription').value
    if(title && description) {
      Course.create({ title, description }).then(response => {
        const { course } = response.data
        displayOneCourse(course.id)
      })
    } else {
      return 
    }
  })
}
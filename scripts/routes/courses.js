window.coursesView = {
  init() {
    window.location.hash = '#/courses'
    nav.init()
    displayCourses()
  }
}
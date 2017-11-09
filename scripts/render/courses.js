displayCourses = (courses) => {
  document.getElementById('main-content').innerHTML = ''
  document.getElementById('main-content').appendChild(coursesTemplate(courses))
}

window.courseView = {
  init() {
    window.location.hash = '#/courses'
    nav.init()
    Course.index().then(result => {
      const { courses } = result.data
      displayCourses(courses)
    }) 
  }
}

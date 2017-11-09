displayCourses = (courses) => {
  document.getElementById('main-content').innerHTML = ''
  document.getElementById('main-content').appendChild(coursesTemplate(courses))
  courses.forEach(course => {
    document.getElementById(`course-button-${course.id}`).addEventListener('click', (e) => {
      window.location.hash = `#/courses/${course.id}`
      displayOneCourse(course.id)
    })
  })
}

displayOneCourse = (id) => {
  Course.getOne(id).then(result => {
    const { course } = result.data
    CourseUnit.index(course.id).then(result => {
      const { units } = result.data
      console.log(units)
      document.getElementById('main-content').innerHTML = singleCourseTemplate(course, units)
    }) 
  })
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

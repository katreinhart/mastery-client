displayCourses = (courses) => {
  nav.init()
  Course.index().then(result => {
    const { courses } = result.data
    document.getElementById('main-content').innerHTML = ''
    document.getElementById('main-content').appendChild(coursesTemplate(courses))
  })
}

displayOneCourse = (id) => {
  nav.init()
  Course.getOne(id).then(result => {
    const { course } = result.data
    CourseUnit.index(course.id).then(result => {
      const { units } = result.data
      document.getElementById('main-content').innerHTML = singleCourseTemplate(course, units)
    }) 
  })
}



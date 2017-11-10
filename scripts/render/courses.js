displayCourses = (courses) => {
  window.location.hash = `#/courses`
  nav.init()
  Course.index().then(result => {
    const { courses } = result.data
    document.getElementById('main-content').innerHTML = ''
    document.getElementById('main-content').appendChild(coursesTemplate(courses))
  })
}

displayOneCourse = (id) => {
  window.location.hash = `#/courses/${id}`
  nav.init()
  Course.getOne(id).then(result => {
    const { course } = result.data
    CourseUnit.index(course.id).then(result => {
      const { units } = result.data
      document.getElementById('main-content').innerHTML = singleCourseTemplate(course, units)
    }) 
  })
}

displayCourseForm = (id) => {
  if(id) {
    Course.getOne(id).then(response => {
      const { course } = response.data
      document.getElementById('main-content').innerHTML = courseFormTemplate('PUT', course)
      document.getElementById('edit').addEventListener('submit', (e) => {
        e.preventDefault()
        const newTitle = document.getElementById('courseTitle').value
        const newDescription = document.getElementById('courseDescription').value
        if(newTitle && newDescription) {
          Course.update(id, { title: newTitle, description: newDescription }).then(response => {
            const [course] = response.data.course
            displayOneCourse(course.id)
          })
        } else {
          return
        }
      })
    })
  } 
  else {
    document.getElementById('main-content').innerHTML = courseFormTemplate('POST')
    document.getElementById('create').addEventListener('submit', (e) => {
      e.preventDefault()
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
}
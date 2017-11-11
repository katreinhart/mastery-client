displayCourses = (courses) => {
  nav.init()
  Course.index().then(result => {
    const { courses } = result.data
    mainContent.innerHTML = ''
    mainContent.appendChild(coursesTemplate(courses))
  })
}

displayOneCourse = (id) => {
  nav.init()
  Course.getOne(id).then(result => {
    const { course } = result.data
    CourseUnit.index(course.id).then(result => {
      const { units } = result.data
      mainContent.innerHTML = singleCourseTemplate(course, units)
    }) 
  })
}

displayCourseForm = (id) => {
  if(id) {
    Course.getOne(id).then(response => {
      const { course } = response.data
      mainContent.innerHTML = courseFormTemplate(course)
      document.getElementById('edit').addEventListener('submit', handleSubmitCourseForm)
    })
  } 
  else {
    mainContent.innerHTML = courseFormTemplate()
    document.getElementById('create').addEventListener('submit', handleSubmitCourseForm)
  }
}

handleSubmitCourseForm = (e) => {
  e.preventDefault()
  const title = document.getElementById('courseTitle').value
  const description = document.getElementById('courseDescription').value
  const id = parseHash()[1]
  if(title && description) {
    if(id) {
      Course.update(id, {title, description }).then(response => {
        const [course] = response.data.course
        displayOneCourse(course.id)
      })
    } else {
      Course.create({ title, description }).then(response => {
        const { course } = response.data
        displayOneCourse(course.id)
      })
    }
  } 
}

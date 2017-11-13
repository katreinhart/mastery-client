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
    const coursePromise = Course.getOne(id)
    const unitPromise = CourseUnit.index(id)
    Promise.all([coursePromise, unitPromise]).then(result => {
      const [ { data: {course} }, { data: {units} } ] = result
      mainContent.innerHTML = courseFormTemplate(course)
      if(units.length) {
        document.getElementById('delete-button').innerHTML = deleteCourseModalButton(true)
      } else {
        document.getElementById('delete-button').innerHTML = deleteCourseModalButton(false)
        document.getElementById('confirm-delete').addEventListener('click', (e) => {
          Course.delete(course.id).then(result => {
            displayCourses()
          })
        })
      }
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
    if(id !== 'new') {
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

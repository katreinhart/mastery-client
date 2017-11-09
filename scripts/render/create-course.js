nav.init()

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

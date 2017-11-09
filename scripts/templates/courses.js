const coursesTemplate = (courses) => {
  const courseList = document.createElement('DIV')
  courseList.classList.add('row')

  courses.forEach(course => {
    const courseDiv = document.createElement('div')
    courseDiv.classList = 'col-sm-6 col-md-4'

    const courseButton = document.createElement('a')
    courseButton.classList = 'btn btn-danger course-button'
    courseButton.textContent = course.title
    courseButton.href = `#/courses/${course.id}`

    courseDiv.appendChild(courseButton)
    
    courseList.appendChild(courseDiv)
  })
  const newCourseButton = document.createElement('a')
  newCourseButton.textContent = "Add new course"
  newCourseButton.classList = 'btn btn-danger course-button'
  newCourseButton.href = `#/courses/new`
  
  courseList.appendChild(newCourseButton)

  return courseList
}


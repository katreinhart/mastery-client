const coursesTemplate = (courses) => {
  const courseList = document.createElement('DIV')
  courseList.classList.add('row')

  courses.forEach(course => {
    const courseDiv = document.createElement('div')
    courseDiv.classList = 'col-sm-6 col-md-4'

    const courseButton = document.createElement('a')
    courseButton.classList = 'btn lime darken-3 course-button'
    courseButton.textContent = course.title
    courseButton.href = `#/courses/${course.id}`

    courseDiv.appendChild(courseButton)
    
    courseList.appendChild(courseDiv)
  })
  const newCourseButton = document.createElement('a')
  newCourseButton.textContent = "Add new course"
  newCourseButton.classList = 'btn blue darken-4 course-button'
  newCourseButton.href = `#/courses/new`

  const goHomeButton = document.createElement('a')
  goHomeButton.textContent = "Back to home"
  goHomeButton.classList = 'btn btn-outline-warning home-button'
  goHomeButton.href = '#'
  
  courseList.appendChild(newCourseButton)
  courseList.appendChild(goHomeButton)
  return courseList
}

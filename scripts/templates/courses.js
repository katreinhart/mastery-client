const coursesTemplate = (courses) => {
  console.log(courses)
  const courseList = document.createElement('DIV')
  courseList.classList.add('row')

  courses.forEach(course => {
    const courseDiv = document.createElement('div')
    courseDiv.classList = 'col-sm-6 col-md-4'
    const courseButton = document.createElement('button')
    courseButton.classList = 'btn btn-danger course-button'
    courseButton.textContent = course.title
    courseButton.id = `course-button-${course.id}`
    courseDiv.appendChild(courseButton)
    courseList.appendChild(courseDiv)
  })

  return courseList
//   return `
//   <div class="row">
//     <div class="col-sm-6 col-md-4"><button class="btn btn-danger course-button" id="course-1">Earth Science</button></div>
//     <div class="col-sm-6 col-md-4"><button class="btn btn-danger course-button" id="course-2">Anatomy</button></div>
//     <div class="col-sm-6 col-md-4"><button class="btn btn-danger course-button" id="course-3">Physics</button></div>
//     <div class="col-sm-6 col-md-4"><button class="btn btn-danger course-button" id="course-4">Weather &amp; Climate</button></div>
//     <div class="col-sm-6 col-md-4"><button class="btn btn-danger course-button" id="course-5">Cells and Organs</button></div>
//     <div class="col-sm-6 col-md-4"><button class="btn btn-danger course-button" id="course-6">Atoms &amp; Molecules</button></div>
//   </div>
// `
}


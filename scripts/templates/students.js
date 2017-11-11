const allStudentsTemplate = (students) => {
  const studentList = students.map(student => {
    return `<li class="list-group-item">
        <a href="#/students/${student.id}">${student.preferred_name} ${student.last_name}</a> 
      </li>`
  }).join('')
  return `
    <div class="container">
      <div class="row"><h3>All Students</h3></div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <ul class="list-group">
            ${studentList}
          </ul>
        </div>
      </div>
      <div class="row">
        <a href="#">Home</a>
      </div>
    </div>
  `
}
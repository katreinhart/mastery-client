const allStudentsTemplate = (students, classes) => {
  const studentList = students.map(student => {
    const studentClass = classes.find(group => group.id === student.class_id)
    return `<li class="list-group-item "><div class="row">
        <div class="col-sm-2 col-md-3"><a class="indigo-text" href="#/students/${student.id}"><strong>${student.preferred_name} ${student.last_name}</strong></a> </div>
        <div class="col-sm-2 col-md-3"><a class="btn blue darken-4 btn-block" href="#/classes/${student.class_id}">${studentClass.name}</a></span></div>
        <div class="col-sm-8 col-md-6">Current Unit: coming soon</div>
        </div>
      </li>`
  }).join('')
  
  return `
    <div class="container">
      <div class="row">
        <h3 class="display-4">All Students</h3>
      </div>
      <div class="row">
        <a class="btn lime darken-2" href="#">Home</a>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <ul class="list-group">
            ${studentList}
          </ul>
        </div>
      </div>
    </div>
  `
}


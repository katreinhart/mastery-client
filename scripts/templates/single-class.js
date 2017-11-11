const singleClassTemplate = (data, roster) => {
  const { class_id, name } = data
  const teacherName = data.teacher_name

  const studentRoster = roster
                   ? roster.map(student => `<li class="list-group-item"><a href="#/students/${student.id}">${student.preferred_name} ${student.last_name}</a></li>`).join('')
                   : ''

  return `
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center mt-3 mb-2"><h2>${name}</h2></div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-lg-3">
          <ul class="list-group">
            ${studentRoster}
            <li class="list-group-item list-group-item-info"><a href="#/classes/${class_id}/students/new">Add New Student</a></li>
          </ul>
        </div>
        <div class="col-sm-8 col-lg-9">
          <h4>${teacherName}</h4>
          <p>Future stuff on class units and lessons will go here... </p>
        </div>
      </div>
      <a href="#/classes">Back</a>
    </div>
  `
}

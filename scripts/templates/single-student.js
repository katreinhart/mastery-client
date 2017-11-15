const singleStudentTemplate = (student, group) => {
  const teacherName = group.teacher_name
  const groupName = group.name
  return `
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center mt-3 mb-2"><h2>${student.preferred_name} ${student.last_name}</h2></div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-lg-3">
        <ul class="list-group">
          <li class="list-group-item">unit 1</li>
          <li class="list-group-item">unit 2</li>
          <li class="list-group-item">unit 3</li>
        </ul>
        <a href="#/classes/${group.class_id}" class="btn lime darken-2 btn-block">Back to Class</a>
      </div>
      <div class="col-sm-8 col-lg-9">
        <p><strong><a class="deep-purple-text" href="#/classes/${group.class_id}">${teacherName}'s ${groupName}</a></strong></p>
        <p><a href="#/students/${student.id}/edit" class="btn blue darken-4">Edit student info</a></p>
      </div>
    </div>
  </div>
`
}

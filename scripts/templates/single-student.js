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

const deleteStudentButton = () => {
  return `<!-- Button trigger modal -->
  <button type="button" class="btn orange darken-2" data-toggle="modal" data-target="#confirmDeleteStudent">
    Delete Student
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="confirmDeleteStudent" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteStudentModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteStudentModal">Are you sure?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this Student?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn gray" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn orange darken-2" data-dismiss="modal" id="confirm-delete">Delete</button>
        </div>
      </div>
    </div>
  </div>`  
}

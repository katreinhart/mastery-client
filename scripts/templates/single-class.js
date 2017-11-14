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
          <a href="#/classes" class="btn btn-secondary btn-block">Back to Classes</a>
        </div>
        <div class="col-sm-8 col-lg-9">
          <h4>${teacherName}</h4>
          <p>Future stuff on class units and lessons will go here... </p>
          <a href="#/classes/${class_id}/edit" class="btn btn-info">Edit class info</a>
        </div>
      </div>
    </div>
  `
}

const deleteClassModalButton = (disable) => {
  const disabledInfo = disable ? 'disabled aria-disabled="true" title="Cannot delete class with enrolled students"' : ''
  const buttonText = disable ? 'Delete' : 'Delete this class'

  return `<!-- Button trigger modal -->
    <button type="button" ${disabledInfo} class="btn btn-danger" data-toggle="modal" data-target="#confirmDeleteClass">
      ${buttonText}
    </button>

  <!-- Modal -->
  <div class="modal fade" id="confirmDeleteClass" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteClassModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteClassModal">Are you sure?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this class?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal" id="confirm-delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
  `
}

const singleTeacherTemplate = (teacher, classes) => {
  const teacherClasses = classes.filter (each => each.teacher_id === teacher.id)
  const list = teacherClasses.map(each => `<li class="list-group-item"><a href="#/classes/${each.id}">${each.name}</a></li>`).join('')
  return `
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center mt-3 mb-2"><h2>${teacher.preferred_name}</h2></div>
    </div>
    <div class="row">
      <div class="col-sm-3 col-lg-2">
        <img src="http://style.anu.edu.au/_anu/4/images/placeholders/person.png" width=100% alt="Picture of ${teacher.preferred_name}">
        <p>
          <a href="#/teachers/${teacher.id}/edit" class="btn blue darken-4 btn-block">Edit</a>
        </p>
      </div>
      <div class="col-sm-6 col-lg-8">
        <ul class="list-group">
          ${list}
        </ul>
        <a href="#/classes/new" class="btn blue darken-4 btn-block">Add a New Class</a>
        <a href="#/teachers/" class="btn lime darken-2 btn-block">Back to Teachers</a>
      </div>
    </div>
  </div>
`
}

const teacherDeleteButton = (disable) => {
  const disabledInfo = disable ? 'disabled aria-disabled="true" title="Cannot delete teacher while assigned to classes" tabindex="-1"' : ''
  const buttonText = disable ? 'Delete' : 'Delete this teacher'
  const buttonExplanation = disable? '<small>Cannot delete teacher while assigned to classes</small>' : ''

  return `<!-- Button trigger modal -->
    <button type="button" ${disabledInfo} class="btn orange darken-2" data-toggle="modal" data-target="#confirmDeleteTeacher">
      ${buttonText}
    </button>
    ${buttonExplanation}
  <!-- Modal -->
  <div class="modal fade" id="confirmDeleteTeacher" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteTeacherModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteTeacherModal">Are you sure?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this Teacher?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn gray" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn orange darken-2" data-dismiss="modal" id="confirm-delete">Delete</button>
        </div>
      </div>
    </div>
  </div>`  
}
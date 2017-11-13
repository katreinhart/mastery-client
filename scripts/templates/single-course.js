const singleCourseTemplate = (course, units) => {
  const { id, title, description } = course 
  const unitsList = units.map(unit => `<li class="list-group-item"><a href="#/courses/${id}/units/${unit.id}">${unit.title}</a></li>`).join('')
  return `
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center mt-3 mb-2"><h2>${title}</h2></div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-lg-3">
        <ul  class="list-group">
          ${unitsList}
          <li class="list-group-item list-group-item-info"><a href="#/courses/${id}/units/new">Create new unit</a></li>
        </ul>
        <a href="#/courses/" class="btn btn-secondary btn-block">Back to courses</a>
      </div>
      <div class="col-sm-8 col-lg-9">
        <p>${description}</p>
        <a href="#/courses/${id}/edit" class="btn btn-primary">Edit course</a>
      </div>
    </div>
  </div>
`
}

const deleteCourseModalButton = (disable) => {
  const disabledInfo = disable ? 'disabled aria-disabled="true" title="Cannot delete course with dependent lessons"' : ''
  const buttonText = disable ? 'Delete' : 'Delete this course'

  return `<!-- Button trigger modal -->
    <button type="button" ${disabledInfo} class="btn btn-danger" data-toggle="modal" data-target="#confirmDeleteCourse">
      ${buttonText}
    </button>
  
  <!-- Modal -->
  <div class="modal fade" id="confirmDeleteCourse" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteCourseModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteCourseModal">Are you sure?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this Course?
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
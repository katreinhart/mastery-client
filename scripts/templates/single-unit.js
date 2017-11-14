const singleUnitTemplate = (unit, lessons) => {
  const hash = window.location.hash
  const { id, title, summary } = unit

  const lessonList = lessons
                   ? lessons.map(lesson => `<li class="list-group-item"><a href="#/courses/${unit.course_id}/units/${id}/lessons/${lesson.id}">${lesson.title}</a></li>`).join('')
                   : ''

  return `
    <div class="container">
      <div class="row">
        <div class="col-sm-12 mt-3 mb-2 text-center"><h3>${title}</h3></div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <ul class="list-group">
            ${lessonList}
            <li class="list-group-item list-group-item-info"><a href="#/courses/${unit.course_id}/units/${id}/lessons/new">Add New Lesson</a></li>
          </ul>
          <a href="#/courses/${unit.course_id}" class="btn lime darken-2 btn-block">Back to Course</a>
        </div>
        <div class="col-sm-6 col-lg-8">
          <p>${summary}</p>
          <a href="#/courses/${unit.course_id}/units/${id}/edit" class="btn blue darken-4">Edit Unit</a>
        </div>
      </div>
      
    </div>
  `
}

const deleteUnitModalButton = (disable) => {
  const disabledInfo = disable ? 'disabled aria-disabled="true" title="Cannot delete unit with dependent lessons"' : ''
  const buttonText = disable ? 'Delete' : 'Delete this unit'

  return `<!-- Button trigger modal -->
    <button type="button" ${disabledInfo} class="btn orange darken-2" data-toggle="modal" data-target="#confirmDeleteUnit">
      ${buttonText}
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="confirmDeleteUnit" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteUnitModal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmDeleteUnitModal">Are you sure?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this unit?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn gray" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn orange darken-2" data-dismiss="modal" id="confirm-delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `
}
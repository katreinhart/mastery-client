const singleLessonTemplate = (lesson) => {
  const hash = window.location.hash.split('/').filter(item => item !== "")
  hash.pop()
  const back = hash.join('/')
  const { id, title, content } = lesson 
  return `
  <div class="container">
    <div class="row">
      <div class="col-sm-12"><h3>${title}</h3></div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-lg-4">
        
      </div>
      <div class="col-sm-6 col-lg-8">
        <p>${content}</p>
        <a href="${back}/${id}/edit">Edit lesson</a>
      </div>
      <a href="${back}/">Back to lessons</a>
    </div>
  </div>
`
}

const deleteModalLessonButton = () => {
  return `<!-- Button trigger modal -->
  <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#confirmDeleteLesson">
    Delete this lesson
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="confirmDeleteLesson" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteLessonModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteLessonModal">Are you sure?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this lesson?
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

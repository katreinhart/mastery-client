const singleLessonTemplate = (lesson) => {
  const converter = new showdown.Converter()
  const hash = window.location.hash.split('/').filter(item => item !== "")
  hash.pop()
  const back = hash.join('/')
  const { id, title, content } = lesson 
  const htmlContent = converter.makeHtml(content)
  return `
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center mt-3 mb-2"><h3>${title}</h3></div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-lg-3">
        <a href="${back}/" class="btn lime darken-2">Back to lessons</a>  
      </div>
      <div class="col-sm-8 col-lg-9">
        <p>${htmlContent}</p>
        <a href="${back}/${id}/edit" class="btn blue darken-4">Edit lesson</a>
      </div>
    </div>
  </div>
`
}

const deleteModalLessonButton = () => {
  return `<!-- Button trigger modal -->
  <button type="button" class="btn orange darken-2" data-toggle="modal" data-target="#confirmDeleteLesson">
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
          <button type="button" class="btn gray" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn orange darken-2" data-dismiss="modal" id="confirm-delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
  `
}

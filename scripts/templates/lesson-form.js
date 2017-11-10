const lessonFormTemplate = (courseId, unitId, lesson) => {
  const buttonText = lesson ? 'Save' : 'Create'
  const { title, summary } = lesson ? lesson : { title: '', summary: '' }
  const id = lesson ? 'edit' : 'create' 
  const displayTitle = lesson ? 'Edit Lesson' : 'Create a New Lesson'

  return `<div class="container">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <h3>${displayTitle}</h3>
        <form id="${id}">
          <div class="form-group">
            <label for="lessonTitle">Lesson Title</label>
            <input required type="text" class="form-control" id="lessonTitle" aria-describedby="titleHelp" placeholder="e.g. Mohs Hardness Scale" value="${title}">
          </div>
          <div class="form-group">
            <label for="lessonContent">Lesson Content</label>
            <textarea required class="form-control" id="lessonContent" rows="3">${summary}</textarea>
          </div>
          <button type="submit" id="submit-lesson" class="btn btn-primary">${buttonText}</button>
        </form>
      </div>
    </div>
  </div>`
}
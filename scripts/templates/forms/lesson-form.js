const lessonFormTemplate = (courseId, unitId, lesson) => {
  const buttonText = lesson ? 'Save' : 'Create'
  const { title, content } = lesson ? lesson : { title: '', content: '' }
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
            <label for="lessonContent">Lesson Content</label> <span class="small"><a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a> supported</span>
            <textarea required class="form-control" id="lessonContent" style="height:150px">${content}</textarea>
          </div>
          <button type="submit" id="submit-lesson" class="btn blue darken-4">${buttonText}</button>
          <span id="delete-button"></span>
        </form>
      </div>
    </div>
  </div>`
}

const courseFormTemplate = (course) => {
  const buttonText = course ? 'Save' : 'Create'
  const titleText = course ? 'Edit Course' : 'Create a New Course'
  const { title, description } = course ? course : { title: '', description: '' }
  const id = course ? 'edit' : 'create' 

  return `<div class="container">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <h3>${titleText}</h3>
          <form id="${id}">
            <div class="form-group">
              <label for="courseTitle">Course Title</label>
              <input required type="text" class="form-control" id="courseTitle" aria-describedby="titleHelp" placeholder="e.g. Earth Science" value="${title}">
            </div>
            <div class="form-group">
              <label for="courseDescription">Course Description</label>
              <textarea required class="form-control" id="courseDescription" rows="3">${description}</textarea>
            </div>
            <button type="submit" class="btn btn-primary">${buttonText}</button>
          </form>
      </div>
    </div>
  </div>`
}
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
              <input required type="text" class="form-control" id="courseTitle" aria-describedby="titleHelp" value="${title}">
            </div>
            <div class="form-group">
              <label for="courseDescription">Course Description</label>
              <textarea required class="form-control" id="courseDescription" style="height: 100px">${description}</textarea>
            </div>
            <button type="submit" class="btn blue darken-4">${buttonText}</button>
            <span id="delete-button"></span>
          </form>
      </div>
    </div>
  </div>`
}
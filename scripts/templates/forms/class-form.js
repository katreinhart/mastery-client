const classFormTemplate = (teachers, classObj) => {
  const buttonText = classObj ? 'Save' : 'Create'
  const id = classObj ? 'edit' : 'create'
  const className = classObj? classObj.name : ''
  const teacherSelection = teachers.map(teacher => `<option value="${teacher.id}">${teacher.preferred_name}</option>`)
  
  return `<div class="container">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <h3>Create a New Class</h3>
          <form id="${id}">
            <div class="form-group">
              <label for="className">Class Name</label>
              <input required type="text" class="form-control" id="className" aria-describedby="titleHelp" placeholder="e.g. Panthers" value="${className}">
            </div>
            <select id="teacherId" class="custom-select">
              <option selected disabled>Select a teacher</option>
              ${teacherSelection}
            </select>
            <button type="submit" class="btn btn-primary">${buttonText}</button>
          </form>
      </div>
    </div>
  </div>`
}
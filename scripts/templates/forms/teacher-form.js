const teacherFormTemplate = (teacher) => {
  const buttonText = teacher ? 'Save' : 'Create'
  const preferred_name = teacher ? teacher.preferred_name : '' 
  const last_name = teacher ? teacher.last_name : '' 
  const first_name = teacher ? teacher.first_name : '' 
  const formId = teacher ? 'edit' : 'create' 
  const displayTitle = teacher ? 'Edit teacher' : 'Add New teacher'

  return `<div class="container">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <h3>${displayTitle}</h3>
        <form id="${formId}">
          <div class="form-group">
            <label for="teacherFName">First Name</label>
            <input required type="text" class="form-control" id="teacherFName" aria-describedby="titleHelp" value="${first_name}">
          </div>
          <div class="form-group">
            <label for="teacherLName">Last Name</label>
            <input required type="text" class="form-control" id="teacherLName" value="${last_name}">
          </div>
          <div class="form-group">
          <label for="teacherPName">Preferred Name</label>
          <input required type="text" class="form-control" id="teacherPName" value="${preferred_name}">
        </div>
          <button type="submit" class="btn btn-primary">${buttonText}</button>
          <span id="delete-button"></span>
        </form>
      </div>
    </div>
  </div>`
}
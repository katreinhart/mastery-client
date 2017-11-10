const studentFormTemplate = (courseId, student) => {
  const buttonText = student ? 'Save' : 'Create'
  const { preferred_name, last_name } = student ? student : { preferred_name: '', last_name: '' }
  const formId = student ? 'edit' : 'create' 
  const displayTitle = student ? 'Edit Student' : 'Add New Student'

  return `<div class="container">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <h3>${displayTitle}</h3>
        <form id="${formId}">
          <div class="form-group">
            <label for="studentPName">Preferred/First Name</label>
            <input required type="text" class="form-control" id="studentPName" aria-describedby="titleHelp" value="${preferred_name}">
          </div>
          <div class="form-group">
            <label for="studentLName">Last Name</label>
            <textarea required class="form-control" id="studentLName" rows="3">${last_name}</textarea>
          </div>
          <button type="submit" class="btn btn-primary">${buttonText}</button>
        </form>
      </div>
    </div>
  </div>`
}
const studentFormTemplate = (courseId, student, classes) => {
  const buttonText = student ? 'Save' : 'Create'
  console.log(student)
  // const { preferred_name, last_name } = student ? student : { preferred_name: '', last_name: '' }
  const preferred_name = student ? student.preferred_name : '' 
  const last_name = student ? student.last_name : '' 
  const formId = student ? 'edit' : 'create' 
  const displayTitle = student ? 'Edit Student' : 'Add New Student'
  const classSelection = classes ? classes.map(each => {
    return `<option value="${each.id}">${each.preferred_name}'s ${each.name}</option>`
  }) 
    : '' 
  const selectionDiv = classes ? `<select id="classId" class="custom-select">
                                    <option selected disabled>Select a class</option>
                                    ${classSelection}
                                  </select>` 
                               : ''

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
            <input required class="form-control" id="studentLName" rows="3" value="${last_name}">
          </div>
          ${selectionDiv}
          <button type="submit" class="btn btn-primary">${buttonText}</button>
        </form>
      </div>
    </div>
  </div>`
}
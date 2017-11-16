const unitFormTemplate = (courseId, unit) => {
  const buttonText = unit ? 'Save' : 'Create'
  const { title, summary_text } = unit ? unit : { title: '', summary_text: '' }
  const id = unit ? 'edit' : 'create' 
  const displayTitle = unit ? 'Edit Unit' : 'Create a New Unit'

  return `<div class="container">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <h3>${displayTitle}</h3>
        <form id="${id}">
          <div class="form-group">
            <label for="unitTitle">Unit Title</label>
            <input required type="text" class="form-control" id="unitTitle" aria-describedby="titleHelp" placeholder="e.g. Intro to Minerals" value="${title}">
          </div>
          <div class="form-group">
            <label for="unitSummary">Unit Summary</label>
            <textarea required class="form-control" id="unitSummary" style="height:150px">${summary_text}</textarea>
          </div>
          <button type="submit" class="btn blue darken-4">${buttonText}</button>
          <span id="delete-button"></span>
        </form>
      </div>
    </div>
  </div>`
}

const unitFormTemplate = (method, unit) => {
  const buttonText = method === 'POST' ? 'Create' : 'Save'
  const { title, summary } = unit ? unit : { title: '', summary: '' }
  const id = unit ? 'edit' : 'create' 

  return `<div class="container">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <h3>Create a New Unit</h3>
        <form id="${id}">
          <div class="form-group">
            <label for="unitTitle">Unit Title</label>
            <input required type="text" class="form-control" id="unitTitle" aria-describedby="titleHelp" placeholder="e.g. Intro to Minerals" value="${title}">
          </div>
          <div class="form-group">
            <label for="unitSummary">Unit Summary</label>
            <textarea required class="form-control" id="unitSummary" rows="3">${summary}</textarea>
          </div>
          <button type="submit" class="btn btn-primary">${buttonText}</button>
        </form>
      </div>
    </div>
  </div>`
}
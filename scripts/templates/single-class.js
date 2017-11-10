const singleClassTemplate = (data) => {
  console.log(data)
  const hash = window.location.hash
  const { id, name } = data

  // const studentRoster = roster
  //                  ? roster.map(student => `<li class="list-group-item">${student.preferred_name}</li>`).join('')
  //                  : ''

  return `
    <div class="container">
      <div class="row">
        <div class="col-sm-12"><h3>${name}</h3></div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <ul class="list-group">
            
            <li class="list-group-item list-group-item-info"><a href="#/classes/${id}/new">Add New Student</a></li>
          </ul>
        </div>
      </div>
      <a href="#/classes">Back</a>
    </div>
  `
}
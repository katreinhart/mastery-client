const singleCourseTemplate = (course, units) => {
  const { id, title, description } = course 
  const unitsList = units.map(unit => `<li><a href="#/courses/${id}/units/${unit.id}">${unit.title}</a></li>`).join('')
  return `
  <div class="container">
    <div class="row">
      <div class="col-sm-12"><h3>${title}</h3></div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-lg-4">
        <ul>
          ${unitsList}
          <li><a href="#/courses/${id}/units/new">Create new unit</a></li>
        </ul>
      </div>
      <div class="col-sm-6 col-lg-8">
        <p>${description}</p>
        <a href="#/courses/${id}/edit">Edit course</a>
      </div>
    </div>
  </div>
`
}
const singleCourseTemplate = (course, units) => {
  const { id, title, description } = course 
  const unitsList = units.map(unit => `<li class="list-group-item"><a href="#/courses/${id}/units/${unit.id}">${unit.title}</a></li>`).join('')
  return `
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center mt-3 mb-2"><h2>${title}</h2></div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-lg-3">
        <ul  class="list-group">
          ${unitsList}
          <li class="list-group-item list-group-item-info"><a href="#/courses/${id}/units/new">Create new unit</a></li>
        </ul>
      </div>
      <div class="col-sm-8 col-lg-9">
        <p>${description}</p>
        <a href="#/courses/${id}/edit">Edit course</a>
      </div>
      <a href="#/courses/">Back to courses</a>
    </div>
  </div>
`
}
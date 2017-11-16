const singleCourseTemplate = (course, units) => {
  const { id, title, description } = course 
  const unitsList = units.map(unit => `<li class="list-group-item"><a href="#/courses/${id}/units/${unit.id}" class="deep-purple-text">${unit.title}</a></li>`).join('')
  return `
  <div class="container">
    <div class="row">
      <div class="col-sm-3 mt-4">Course: ${course.title}</div>
      <div class="col-sm-6 text-center mt-3 mb-2"><h2 class="display-4">${title}</h2></div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-lg-3">
        <ul class="list-group">
          ${unitsList}
          <li class="list-group-item list-group-item-info"><a href="#/courses/${id}/units/new" class="indigo-text"><strong>Create new unit</strong></a></li>
        </ul>
        <a href="#/courses/" class="btn lime darken-2 btn-block">Back to courses</a>
      </div>
      <div class="col-sm-8 col-lg-9">
        <p>${description}</p>
        <a href="#/courses/${id}/edit" class="btn blue darken-4">Edit course</a>
      </div>
    </div>
  </div>`
}

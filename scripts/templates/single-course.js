const singleCourseTemplate = (course, units) => {
  const { title, description } = course 
  const unitsList = units.map(unit => `<li><a href="#/units/${unit.id}" id="unit-link-${unit.id}">${unit.title}</a></li>`)
  return `
  <div class="container">
  <div class="row">
    <div class="col-sm-12"><h3>${title}</h3></div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-lg-4">
      <ul>
        ${unitsList}
      </ul>
    </div>
    <div class="col-sm-6 col-lg-8">
      <p>${description}</p>
    </div>
  </div>
</div>
`
}
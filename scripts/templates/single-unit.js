const singleUnitTemplate = (unit, lessons) => {
  const { id, title, summary } = unit
  const lessonList = lessons.map(lesson => `<li><a href="/lessons/${lesson.id}">${lesson.title}</a></li>`)

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
const singleUnitTemplate = (unit, lessons) => {
  const hash = window.location.hash
  const { id, title, summary } = unit

  const lessonList = lessons
                   ? lessons.map(lesson => `<li class="list-group-item"><a href="#/courses/${unit.course_id}/units/${id}/lessons/${lesson.id}">${lesson.title}</a></li>`).join('')
                   : ''

  return `
    <div class="container">
      <div class="row">
        <div class="col-sm-12"><h3>${title}</h3></div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <ul class="list-group">
            ${lessonList}
            <li class="list-group-item list-group-item-info"><a href="#/courses/${unit.course_id}/units/${id}/lessons/new">Add New Lesson</a></li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-8">
          <p>${summary}</p>
          <a href="#/courses/${unit.course_id}/units/${id}/edit">Edit</a>
        </div>
      </div>
      <a href="#/courses/${unit.course_id}">Back</a>
    </div>
  `
}
const singleUnitTemplate = (unit, lessons) => {
  const hash = window.location.hash
  const { id, title, summary } = unit

  const lessonList = lessons
                   ? lessons.map(lesson => `<li class="list-group-item"><a href="#/courses/${unit.course_id}/units/${id}/lessons/${lesson.id}">${lesson.title}</a></li>`).join('')
                   : ''

  return `
    <div class="container">
      <div class="row">
        <div class="col-sm-3 mt-4"><a href="#/courses/${unit.course_id}">Course</a> | Unit: ${unit.title}</div>
        <div class="col-sm-6 mt-3 mb-2 text-center"><h3>${title}</h3></div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-lg-3">
          <ul class="list-group">
            ${lessonList}
            <li class="list-group-item list-group-item-info"><a href="#/courses/${unit.course_id}/units/${id}/lessons/new">Add New Lesson</a></li>
          </ul>
          <a href="#/courses/${unit.course_id}" class="btn lime darken-2 btn-block">Back to Course</a>
        </div>
        <div class="col-sm-8 col-lg-9">
          <p>${summary}</p>
          <a href="#/courses/${unit.course_id}/units/${id}/edit" class="btn blue darken-4">Edit Unit</a>
        </div>
      </div>
      
    </div>
  `
}

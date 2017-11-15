const singleTeacherTemplate = (teacher, classes) => {
  const teacherClasses = classes.filter (each => each.teacher_id === teacher.id)
  const list = teacherClasses.map(each => `<li class="list-group-item"><a href="#/classes/${each.id}">${each.name}</a></li>`).join('')
  return `
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center mt-3 mb-2"><h2>${teacher.preferred_name}</h2></div>
    </div>
    <div class="row">
      <div class="col-sm-3 col-lg-2">
        <img src="http://style.anu.edu.au/_anu/4/images/placeholders/person.png" width=100% alt="Picture of ${teacher.preferred_name}">
        <p>
          <a href="#/teachers/${teacher.id}/edit" class="btn blue darken-4 btn-block">Edit</a>
        </p>
      </div>
      <div class="col-sm-6 col-lg-8">
        <ul class="list-group">
          ${list}
        </ul>
        <a href="#/classes/new" class="btn blue darken-4 btn-block">Add a New Class</a>
        <a href="#/teachers/" class="btn lime darken-2 btn-block">Back to Teachers</a>
      </div>
    </div>
  </div>
`
}

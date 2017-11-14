const allTeachersTemplate = (teachers, classes) => {
  const teacherList = teachers.map(teacher => {
    const teacherClasses = classes.filter(group => group.teacher_id === teacher.id)
    const classList = teacherClasses.map(each => `<a href="#/classes/${each.id}">${each.name}</a>`).join(', ')
    return `<li class="list-group-item"><div class="row">
        <div class="col-sm-2 col-md-3"><a  href="#/teachers/${teacher.id}">${teacher.preferred_name}</a> </div>
       
        <div class="col-sm-8 col-md-6">${classList}</div>
        </div>
      </li>`
  }).join('')
  
  return `
    <div class="container">
      <div class="row">
        <h3>All Teachers</h3>
      </div>
      <div class="row">
        <div class="col-sm-2"><a class="btn lime darken-2 btn-block" href="#">Home</a></div>
        
      </div>
      <div class="row">
        <div class="col-12"></div></div>
          <ul class="list-group">
            
            <li class="list-group-item"><div class="row">
            <div class="col-sm-2 col-md-3"><u>Teacher Name</u></div>
           
            <div class="col-sm-8 col-md-6"><u>Classes</u></div>
            </div>
          </li>
            ${teacherList}
          </ul>
          <a class="btn btn-primary btn-block"href="#/teachers/new" >Add new teacher</a>
        </div>
      </div>
    </div>
  `
}
const displayAllTeachers = () => {
  nav.init()
  const teacherPromise = Teachers.index()
  const classesPromise = Class.index()

  Promise.all([teacherPromise, classesPromise]).then(result => {
    const[ { data: { teachers }}, { data: { classes }}] = result
    mainContent.innerHTML = allTeachersTemplate(teachers, classes)
  })
}

const displayOneTeacher = (teacherId) => {
  nav.init()
  updateHash(`#/teachers/${teacherId}`)
  const teacherPromise = Teachers.show(teacherId)
  const classesPromise = Class.index()

  Promise.all([teacherPromise, classesPromise]).then(result => {
    const [{ data: { teacher }}, { data: { classes }}] = result
    mainContent.innerHTML = singleTeacherTemplate(teacher, classes)
  })
}

const displayTeacherForm = (teacherId) => {
  nav.init() 
  if(teacherId) {
    const classesPromise = Class.index()
    const teacherPromise = Teachers.show(teacherId)

    Promise.all([classesPromise, teacherPromise]).then(result => {
      const [{ data: { classes }}, { data: { teacher }}] = result
      mainContent.innerHTML = teacherFormTemplate(teacher)
      const teacherClasses = classes.filter(each => each.teacher_id === teacher.id)
      if(teacherClasses.length) {
        document.getElementById('delete-button').innerHTML = teacherDeleteButton(true)
      } else {
        document.getElementById('delete-button').innerHTML = teacherDeleteButton(false)
        document.getElementById('confirm-delete').addEventListener('click', e => {
          e.preventDefault()
          Teachers.delete(teacherId).then(result => {
            displayAllTeachers()
          })
        })
      }
      document.getElementById('edit').addEventListener('submit',handleTeacherFormSubmit)
    })
  } else {
    mainContent.innerHTML = teacherFormTemplate()
    document.getElementById('create').addEventListener('submit', handleTeacherFormSubmit)
  }  
}

const handleTeacherFormSubmit = (e) => {
  e.preventDefault()
  const id = parseHash()[1]

  const first_name = document.getElementById('teacherFName').value
  const last_name = document.getElementById('teacherLName').value
  const preferred_name = document.getElementById('teacherPName').value

  if(id === 'new') {
    Teachers.create({ first_name, last_name, preferred_name }).then(result => {
      const { teacher } = result.data
      displayOneTeacher(teacher.id)
    })
  } else {
    Teachers.update(id, { first_name, last_name, preferred_name }).then(result => {
      const { teacher } = result.data
      displayOneTeacher(teacher.id)
    })
  }
  
}
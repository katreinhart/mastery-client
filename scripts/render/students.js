displayAllStudents = () => {
  nav.init()
  const studentPromise = Student.index()
  const classPromise = Class.index()

  Promise.all([studentPromise, classPromise]).then(result => {
    const [ { data: {students} }, { data: {classes} } ] = result
    mainContent.innerHTML = allStudentsTemplate(students, classes)
  })
}

displayOneStudent = (id) => {
  Student.show(id).then(result => {
    const { student } = result.data
    Class.show(student.class_id).then(result => {
      const [group] = result.data.group
      Teachers.show(group.teacher_id).then(result => {
        const { teacher } = result.data
        mainContent.innerHTML = singleStudentTemplate(student, group)
      })
    })
  }) 
}


handleStudentFormSubmit = (e) => {
  e.preventDefault()
  const preferred_name = document.getElementById('studentPName').value
  const last_name = document.getElementById('studentLName').value
  if(parseHash()[3] === 'new') {
    classId = parseHash()[1]
    ClassStudent.create(classId, { preferred_name, last_name }).then(result => {
      displayOneClass(classId)
    })
  } else {
    const class_id = document.getElementById('classId').value
    const studentId = parseHash()[1]
    Student.update(studentId, { preferred_name, last_name, class_id }).then(result => {
      displayOneStudent(studentId)
    })
  }
}

displayNewStudentForm = (classId) => {
  mainContent.innerHTML = studentFormTemplate(classId)
  document.getElementById('create').addEventListener('submit', handleStudentFormSubmit)
}

displayEditStudentForm = (studentId) => {
  const classesPromise = Class.index()
  const studentPromise = Student.show(studentId)
  Promise.all([classesPromise, studentPromise]).then(result => {
    const [ { data: { classes } }, { data: { student } } ] = result
    mainContent.innerHTML = studentFormTemplate(0, student, classes)
    document.getElementById('edit').addEventListener('submit', handleStudentFormSubmit)
    document.getElementById('delete-button').innerHTML = deleteStudentButton()
    document.getElementById('confirm-delete').addEventListener('click', (e) => {
      Student.delete(student.id).then(result => {
        const { class_id } = result.data.student
        displayOneClass(class_id)
      })
    })
  })
}

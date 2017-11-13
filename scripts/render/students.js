displayAllStudents = () => {
  updateHash(`#/students`)
  Student.index().then(result => {
    const { students } = result.data
    mainContent.innerHTML = allStudentsTemplate(students)
  })
}

displayOneStudent = (id) => {
  updateHash(`#/students/${id}`)
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

displayNewStudentForm = (classId) => {
  updateHash(`#/classes/${classId}/students/new`)
  mainContent.innerHTML = studentFormTemplate(classId)
  document.getElementById('create').addEventListener('submit', (e) => {
    e.preventDefault()
    const preferred_name = document.getElementById('studentPName').value
    const last_name = document.getElementById('studentLName').value
    ClassStudent.create(classId, {preferred_name, last_name}).then(result => {
      displayOneClass(classId)
    })
  })
}

handleStudentFormSubmit = (e) => {
  const studentId = parseHash()[1]
  e.preventDefault()
  const preferred_name = document.getElementById('studentPName').value
  const last_name = document.getElementById('studentLName').value
  const class_id = document.getElementById('classId').value
  Student.update(studentId, {preferred_name, last_name, class_id }).then(result => {
    displayOneStudent(studentId)
  })
}

displayEditStudentForm = (studentId) => {
  updateHash(`#/students/${studentId}/edit`)
  const classesPromise = Class.index()
  const studentPromise = Student.show(studentId)
  Promise.all([classesPromise, studentPromise])
    .then(([classesResult, studentResult]) => {
      const { classes } = classesResult.data
      const { student } = studentResult.data
      mainContent.innerHTML = studentFormTemplate(0, student, classes)
      document.getElementById('edit').addEventListener('submit', handleStudentFormSubmit)
    })
}
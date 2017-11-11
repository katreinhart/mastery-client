displayAllStudents = () => {
  window.location.hash = `#/students`
  Student.index().then(result => {
    const { students } = result.data
    document.getElementById('main-content').innerHTML = allStudentsTemplate(students)
  })
}

displayOneStudent = (id) => {
  window.location.hash = `#/students/${id}`
  Student.show(id).then(result => {
    const { student } = result.data
    document.getElementById('main-content').innerHTML = singleStudentTemplate(student)
  }) 
}

displayNewStudentForm = (classId) => {
  window.location.href = `#/classes/${classId}/students/new`
  document.getElementById('main-content').innerHTML = studentFormTemplate('POST', classId)
  document.getElementById('create').addEventListener('submit', (e) => {
    e.preventDefault()
    const preferred_name = document.getElementById('studentPName').value
    const last_name = document.getElementById('studentLName').value
    ClassStudent.create(classId, {preferred_name, last_name}).then(result => {
      displayOneClass(classId)
    })
  })
}

displayEditStudentForm = (studentId) => {
  window.location.href = `#/students/${studentId}/edit`
  Student.show(studentId).then(result => {
    const {student } = result.data
    document.getElementById('main-content').innerHTML = studentFormTemplate('PUT', student)
    document.getElementById('edit').addEventListener('submit', (e) => {
      e.preventDefault()
      const preferred_name = document.getElementById('studentPName').value
      const last_name = document.getElementById('studentLName').value
      Student.update(studentId, {preferred_name, last_name}).then(result => {
        displayOneStudent(studentId)
      })
    })
  })
}
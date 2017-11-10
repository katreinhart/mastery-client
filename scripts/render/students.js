displayAllStudents = () => {

}

displayOneStudent = (id) => {
  window.location.hash = `#/students/${id}`
  Student.show(id).then(result => {
    const { student } = result.data
    document.getElementById('main-content').innerHTML = singleStudentTemplate(student)
  })
  
}
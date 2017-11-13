displayOneUnit = (courseId, unitId) => {
  CourseUnit.show(courseId, unitId).then(result => {
    const [unit] = result.data.unit
    UnitLesson.index(unitId).then(result => {
      const { lessons } = result.data
      mainContent.innerHTML = singleUnitTemplate(unit, lessons)
    })
  })
}

displayUnitForm = (courseId, unitId) => {
  if(unitId) {
    CourseUnit.show(courseId, unitId).then(result => {
      const [unit] = result.data.unit
      mainContent.innerHTML = unitFormTemplate(courseId, unit)
      UnitLesson.index(unitId).then(result => {
        const { lessons } = result.data
        console.log(lessons.length)
        if(lessons.length) {
          document.getElementById('delete-button').innerHTML = deleteUnitModalButton(true)
        } else {
          document.getElementById('delete-button').innerHTML = deleteUnitModalButton(false)
          document.getElementById('confirm-delete').addEventListener('click', (e) => {
            CourseUnit.delete(courseId, unitId).then(result => {
              displayOneCourse(courseId)
            })
          })
        }
      })
      document.getElementById('edit').addEventListener('submit', handleUnitFormSubmit)
    })
  } else {
    mainContent.innerHTML = unitFormTemplate(courseId)
    document.getElementById('create').addEventListener('submit', handleUnitFormSubmit)
  }
}

handleUnitFormSubmit = (e) => {
  e.preventDefault()
  const title = document.getElementById('unitTitle').value
  const summary = document.getElementById('unitSummary').value
  const unitId = parseHash()[3]
  const courseId = parseHash()[1]
  if(unitId === 'new') {
    CourseUnit.create(courseId, { title, summary}).then(response => {
      const { unit } = response.data
      displayOneUnit(courseId, unit.id)
    })
  } else {
    CourseUnit.update(courseId, unitId, { title, summary }).then(response => {
      const { unit } = response.data
      displayOneUnit(courseId, unit.id)
    })
  }
}
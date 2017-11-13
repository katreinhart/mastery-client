displayOneUnit = (courseId, unitId) => {
  CourseUnit.show(courseId, unitId).then(result => {
    updateHash(`#/courses/${courseId}/units/${unitId}`)
    const [unit] = result.data.unit
    UnitLesson.index(unitId).then(result => {
      const lessons = result.data.lessons
      if(lessons.length) {
        mainContent.innerHTML = singleUnitTemplate(unit, lessons)
      } else {
        mainContent.innerHTML = singleUnitTemplate(unit)
      }
    })
  })
}

displayUnitForm = (courseId, unitId) => {
  if(unitId) {
    CourseUnit.show(courseId, unitId).then(result => {
      updateHash(`#/courses/${courseId}/units/${unitId}/edit`)
      const [unit] = result.data.unit
      mainContent.innerHTML = unitFormTemplate(courseId, unit)
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
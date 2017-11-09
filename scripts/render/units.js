displayOneUnit = (courseId, unitId) => {
  CourseUnit.show(courseId, unitId).then(result => {
    window.location.hash = `#/courses/${courseId}/units/${unitId}`
    const [unit] = result.data.unit
    document.getElementById('main-content').innerHTML = singleUnitTemplate(unit)
  })
}

displayUnitForm = (courseId, unitId) => {
  if(unitId) {
    CourseUnit.show(courseId, unitId).then(result => {
      const [unit] = result.data.unit
      document.getElementById('main-content').innerHTML = unitFormTemplate(courseId, unit)
      document.getElementById('edit').addEventListener('submit', (e) => {
        e.preventDefault()
        const newTitle = document.getElementById('unitTitle').value
        const newSummary = document.getElementById('unitSummary').value
        CourseUnit.update(courseId, unitId, { title: newTitle, summary: newSummary }).then(response => {
          const { unit } = response.data
          displayOneUnit(courseId, unit.id)
        })
      })
    })
  } else {
    document.getElementById('main-content').innerHTML = unitFormTemplate(courseId)
    document.getElementById('create').addEventListener('submit', (e) => {
      e.preventDefault()
      const title = document.getElementById('unitTitle').value
      const summary = document.getElementById('unitSummary').value
      CourseUnit.create(courseId, { title, summary}).then(response => {
        const { unit } = response.data
        displayOneUnit(courseId, unit.id)
      })
    })
  }
}
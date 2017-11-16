const displayOneUnit = (courseId, unitId) => {
  CourseUnit.show(courseId, unitId).then(result => {
    const [unit] = result.data.unit
    UnitLesson.index(unitId).then(result => {
      const { lessons } = result.data
      mainContent.innerHTML = singleUnitTemplate(unit, lessons)
    })
  })
}

const displayUnitForm = (courseId, unitId) => {
  if(unitId) {
    CourseUnit.show(courseId, unitId).then(result => {
      const [unit] = result.data.unit
      mainContent.innerHTML = unitFormTemplate(courseId, unit)
      UnitLesson.index(unitId).then(result => {
        const { lessons } = result.data
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

const handleUnitFormSubmit = (e) => {
  e.preventDefault()
  console.log('attempt')
  const title = document.getElementById('unitTitle').value
  const summary_text = document.getElementById('unitSummary').value
  const unitId = parseHash()[3]
  console.log(title, summary_text)
  const courseId = parseHash()[1]
  if(unitId === 'new') {
    console.log('making a new one')
    CourseUnit.create(courseId, { title, summary_text }).then(response => {
      const { unit } = response.data
      displayOneUnit(courseId, unit.id)
    })
  } else {
    CourseUnit.update(courseId, unitId, { title, summary_text }).then(response => {
      const { unit } = response.data
      displayOneUnit(courseId, unit.id)
    })
  }
}
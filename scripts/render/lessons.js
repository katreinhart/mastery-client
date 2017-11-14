const displayOneLesson = (courseId, unitId, lessonId) => {
  updateHash(`#/courses/${courseId}/units/${unitId}/lessons/${lessonId}`)
  UnitLesson.show(unitId, lessonId).then(result => {
    const { lesson } = result.data
    mainContent.innerHTML = singleLessonTemplate(lesson)
  })
}

const displayLessonForm = (courseId, unitId, lessonId) => {
  if(lessonId) {
    UnitLesson.show(unitId, lessonId).then(result => {
      const { lesson } = result.data
      mainContent.innerHTML = lessonFormTemplate(courseId, unitId, lesson)
      document.getElementById('delete-button').innerHTML = deleteModalLessonButton()
      document.getElementById('confirm-delete').addEventListener('click', (e) => {
        UnitLesson.delete(unitId, lessonId).then(response => {
          updateHash(`#/courses/${courseId}/units/${unitId}`)
          displayOneUnit(courseId, unitId)
        })
      })
      document.getElementById('edit').addEventListener('submit', handleLessonFormSubmit)
    })
  } else {
    mainContent.innerHTML = lessonFormTemplate(courseId, unitId)
    document.getElementById('create').addEventListener('submit', handleLessonFormSubmit)
  }
}

const handleLessonFormSubmit = (e) => {
  e.preventDefault()
  const hash = parseHash()
  const courseId = hash[1], unitId = hash[3], lessonId = hash[5]
  const title = document.getElementById('lessonTitle').value
  const content = document.getElementById('lessonContent').value

  if(lessonId === 'new') {
    UnitLesson.create(unitId, { title, content }).then(result => {
      const { lesson } = result.data
      displayOneLesson(courseId, unitId, lesson.id)
    })
  } else {
    UnitLesson.update(unitId, lessonId, { title, content }).then(result => {
      const { lesson } = result.data
      displayOneLesson(courseId, unitId, lessonId)
    })
  }
}

displayOneLesson = (courseId, unitId, lessonId) => {
  updateHash(`#/courses/${courseId}/units/${unitId}/lessons/${lessonId}`)
  UnitLesson.show(unitId, lessonId).then(result => {
    const { lesson } = result.data
    mainContent.innerHTML = singleLessonTemplate(lesson)
  })
}

displayLessonForm = (courseId, unitId, lessonId) => {
  if(lessonId) {
    UnitLesson.show(unitId, lessonId).then(result => {
      const { lesson } = result.data
      mainContent.innerHTML = lessonFormTemplate(courseId, unitId, lesson)
      document.getElementById('delete-button').innerHTML = deleteModalLessonButton()
      document.getElementById('confirm-delete').addEventListener('click', (e) => {
        UnitLesson.delete(unitId, lessonId).then(response => {
          // body.classList.toggle('modal-open')
          updateHash(`#/courses/${courseId}/units/${unitId}`)
          displayOneUnit(courseId, unitId)
        })
      })
      document.getElementById('edit').addEventListener('submit', (e) => {
        e.preventDefault()
        const newTitle = document.getElementById('lessonTitle').value
        const newContent = document.getElementById('lessonContent').value
        UnitLesson.update(unitId, lessonId, { title: newTitle, content: newContent }).then(result => {
          const { lesson } = result.data
          updateHash(`#/courses/${courseId}/units/${unitId}/lessons/${lessonId}`)
          mainContent.innerHTML = singleLessonTemplate(lesson)
        })
      })
      
    })
  } else {
    mainContent.innerHTML = lessonFormTemplate(courseId, unitId)
    document.getElementById('create').addEventListener('submit', (e) => {
      e.preventDefault()
      const title = document.getElementById('lessonTitle').value
      const content = document.getElementById('lessonContent').value
      UnitLesson.create(unitId, { title, content }).then(result => {
        const { lesson } = result.data
        displayOneLesson(courseId, unitId, lesson.id)
      })
    })
  }
}

displayOneLesson = (courseId, unitId, lessonId) => {
  UnitLesson.show(unitId, lessonId).then(result => {
    const { lesson } = result.data
    document.getElementById('main-content').innerHTML = singleLessonTemplate(lesson)
  })
}

displayLessonForm = (courseId, unitId, lessonId) => {
  if(lessonId) {
    UnitLesson.show(unitId, lessonId).then(result => {
      const { lesson } = result.data
      document.getElementById('main-content').innerHTML = lessonFormTemplate(courseId, unitId, lesson)
      document.getElementById('edit').addEventListener('submit', (e) => {
        e.preventDefault()
        const newTitle = document.getElementById('lessonTitle').value
        const newContent = document.getElementById('lessonContent').value
        UnitLesson.update(unitId, lessonId, { title: newTitle, content: newContent }).then(result => {
          const { lesson } = result.data
          window.location.hash = `#/courses/${courseId}/units/${unitId}/lessons/${lessonId}`
          document.getElementById('main-content').innerHTML = singleLessonTemplate(lesson)
        })
      })
    })
  } else {
    document.getElementById('main-content').innerHTML = lessonFormTemplate(courseId, unitId)
    document.getElementById('create').addEventListener('submit', (e) => {
      e.preventDefault()
      const title = document.getElementById('lessonTitle').value
      const content = document.getElementById('lessonContent').value
      UnitLesson.create(unitId, { title, content }).then(result => {
        const { lesson } = result.data
        window.location.hash = `#/courses/${courseId}/units/${unitId}/lessons/${lessonId}`
        document.getElementById('main-content').innerHTML = singleLessonTemplate(lesson)
      })
    })
  }
}

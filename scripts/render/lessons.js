displayOneLesson = (courseId, unitId, lessonId) => {
  UnitLesson.show(unitId, lessonId).then(result => {
    const { lesson } = result.data
    document.getElementById('main-content').innerHTML = singleLessonTemplate(lesson)
  })
}
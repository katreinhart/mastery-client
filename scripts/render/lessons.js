const displayOneLesson = (courseId, unitId, lessonId) => {
  updateHash(`#/courses/${courseId}/units/${unitId}/lessons/${lessonId}`)
  const lessonQuestionPromise = LessonQuestion.index(lessonId)
  const unitLessonPromise = UnitLesson.show(unitId, lessonId)

  Promise.all([lessonQuestionPromise, unitLessonPromise]).then(result => {
    const [ { data: { questions }} ,  { data: { lesson }} ] = result
    mainContent.innerHTML = singleLessonTemplate(lesson, questions)
  })
}

const displayLessonForm = (courseId, unitId, lessonId) => {
  if (lessonId) {
    const lessonQuestionPromise = LessonQuestion.index(lessonId)
    const unitLessonPromise = UnitLesson.show(unitId, lessonId)

    Promise.all([lessonQuestionPromise, unitLessonPromise]).then(result => {
      const [{ data: { questions }}, { data: {lesson}} ] = result
      mainContent.innerHTML = lessonFormTemplate(courseId, unitId, lesson)
      document.getElementById('delete-button').innerHTML = deleteModalLessonButton()
      document.getElementById('confirm-delete').addEventListener('click', (e) => {
        UnitLesson.delete(unitId, lessonId).then(response => {
          updateHash(`#/courses/${courseId}/units/${unitId}`)
          displayOneUnit(courseId, unitId)
        })
      })
      document.getElementById('edit').addEventListener('submit', handleLessonFormSubmit)
      renderQuestions(questions)
      addQuestionForm()
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

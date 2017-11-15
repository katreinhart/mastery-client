const createQuestionObject = () => {
  const questionObject = {
    question: document.getElementById('qprompt').value,
    answer_a: document.getElementById('ans-a').value,
    answer_b: document.getElementById('ans-b').value,
    answer_c: document.getElementById('ans-c').value,
    answer_d: document.getElementById('ans-d').value,
    answer: document.getElementById('correct-ans').value
  }
  return questionObject
}

const handleAddQuestion = e => {
  const lessonId = parseHash()[5]
  e.preventDefault()
  const questionObject = createQuestionObject()
  if(Object.values(questionObject).some(item => item == '')) {
    return
  } else {
    LessonQuestion.create(lessonId, { lesson_id: lessonId, ...questionObject }).then(result => {
      LessonQuestion.index(lessonId).then(result => {
        document.getElementById('new-question-form').innerHTML = ''
        const { data: { questions } } = result
        renderQuestions(questions)
      })
    })
  }
}

const handleEditQuestion = e => {
  e.preventDefault()
  const lessonId = parseHash()[5]
  const questionId = e.target.id.split('-')[2]
  const questionObject = createQuestionObject()
  if(Object.values(questionObject).some(item => item == '')) {
    return
  } else {
    Question.update(questionId, { lesson_id: lessonId, ...questionObject }).then(response => {
      const { data: { question } } = response
      document.getElementById(`question-${questionId}`).innerHTML = renderQuestion(question[0])
    })
  }
}

const addQuestionForm = () => {
  document.getElementById('add-mc').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('new-question-form').innerHTML = mcQuestion()
    document.getElementById('addMCquestion').addEventListener('click', handleAddQuestion)
  })
}

const renderEditQuestionForm = (questionId) => {
  const lessonId = parseHash()[5]
  Question.show(questionId).then(res => {
    const { data: { question } } = res
    const myData = question[0]
    document.getElementById(`question-${questionId}`).innerHTML = mcQuestion(myData)
    document.getElementById(`submit-edit-${questionId}`).addEventListener('click', handleEditQuestion)
    document.getElementById('delete-question').innerHTML = deleteQuestionButton()
    document.getElementById('confirm-delete-question').addEventListener('click', (e) => {
      console.log('tryin to delete it yo')
      Question.delete(questionId).then(result => {
        displayOneLesson(parseHash()[1], parseHash()[3], lessonId)
      })
    })
  })
}

const renderQuestions = (questions) => {
  const questionList = questions.map(question => {
    return renderQuestion(question)
  }).join('')
  document.getElementById('question-area').innerHTML = questionList
  questions.forEach(question => {
    document.getElementById(`edit-question-${question.id}`).addEventListener('click', handleEditButtonClick)
  })
}

const handleEditButtonClick = (e) => {
  e.preventDefault()
  const id = e.target.id
  const divId = e.target.id.split('-').slice(1,3).join('-')
  const questionId = e.target.id.split('-')[2]
  const questionDiv = document.getElementById(divId)
  renderEditQuestionForm(questionId)
}

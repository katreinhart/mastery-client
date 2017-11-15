const renderAddQuestionForm = () => {
  document.getElementById('add-mc').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('new-question-form').innerHTML = mcQuestion()
    document.getElementById('addMCQuestion').addEventListener('click', e => {
      console.log('ad new question')
      const lessonId = parseHash()[5]
      e.preventDefault()
      const questionPrompt = document.getElementById('qprompt').value
      const answerA = document.getElementById('ans-a').value
      const answerB = document.getElementById('ans-b').value
      const answerC = document.getElementById('ans-c').value
      const answerD = document.getElementById('ans-d').value
      const correctAnswer = document.getElementById('correct-ans').value
      if(questionPrompt === '' || answerA === '' || answerB === '' || answerC === '' || answerD === '' || correctAnswer === '') {
        return
      } else {
        LessonQuestion.createMC(lessonId, {
          lesson_id: lessonId,
          question: questionPrompt,
          answer_a: answerA,
          answer_b: answerB,
          answer_c: answerC, 
          answer_d: answerD,
          answer: correctAnswer
        }).then(result => {
          document.getElementById('new-question-form').innerHTML = ''
          console.log(result)
          const { data: { question } } = result
          document.getElementById('question-area').innerHTML += renderQuestion(question[0])
          document.getElementById(`edit-question-${question.id}`).addEventListener('click', (e) => {
            e.preventDefault()
            console.log('asdfasdf')
            document.getElementById(`question-${question.id}`).innerHTML = renderQuestionForm(question)
          })
        })
      }
    })
  })
}

const renderQuestions = (questions) => {
  const questionList = questions.map(question => {
    return renderQuestion(question)
  }).join('')
  document.getElementById('question-area').innerHTML = questionList
  questions.forEach(question => {
    document.getElementById(`edit-question-${question.id}`).addEventListener('click', renderEditForm)
  })
}

const renderQuestion = question =>  `
    <div id="question-${question.id}">
      <p><button class="btn btn-sm blue darken-4" id="edit-question-${question.id}">Edit</button>${question.question}</p> 
      <ol type="A">
        <li>${question.answer_a}</li>
        <li>${question.answer_b}</li>
        <li>${question.answer_c}</li>
        <li>${question.answer_d}</li>
      </ol>
    </div>
    `

const renderEditForm = (e) => {
  e.preventDefault()
  const id = e.target.id
  const divId = e.target.id.split('-').slice(1,3).join('-')
  const questionId = e.target.id.split('-')[2]
  const questionDiv = document.getElementById(divId)
  editQuestionForm(questionId)
}

const editQuestionForm = (questionId) => {
  const lessonId = parseHash()[5]
  Question.show(questionId).then(res => {
    const { data: { question } } = res
    const myData = question[0]
    document.getElementById(`question-${questionId}`).innerHTML = mcQuestion(myData)
    document.getElementById(`submit-edit-${questionId}`).addEventListener('click', e => {
      e.preventDefault()
      console.log('asdfasdfaasdffas')
      const questionPrompt = document.getElementById('qprompt').value
      const answerA = document.getElementById('ans-a').value
      const answerB = document.getElementById('ans-b').value
      const answerC = document.getElementById('ans-c').value
      const answerD = document.getElementById('ans-d').value
      const correctAnswer = document.getElementById('correct-ans').value
      Question.update(questionId, {
        lesson_id: lessonId,
        question: questionPrompt,
        answer_a: answerA,
        answer_b: answerB,
        answer_c: answerC, 
        answer_d: answerD,
        answer: correctAnswer
      }).then(response => {
        const { data: { question } } = response
        console.log(response, question)
        document.getElementById(`question-${questionId}`).innerHTML = renderQuestion(question[0])
      })
    })
  }).catch(error => {
    console.log('something went wrong')
  })
}
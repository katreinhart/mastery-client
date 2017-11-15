const renderAddQuestionForm = () => {
  document.getElementById('add-mc').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('add an MC question')
    document.getElementById('new-question-form').innerHTML = mcQuestion()
    document.getElementById('addMCQuestion').addEventListener('click', e => {
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
        })
      }
    })
  })

  // document.getElementById('add-sa').addEventListener('click', (e) => {
  //   console.log('add a SA question')
  //   document.getElementById('question-area').innerHTML += saQuestion()
  //   document.getElementById('addSAQuestion').addEventListener('click', e => {
  //     e.preventDefault()
  //     const questionPrompt = document.getElementById('qprompt').value
  //     const answer = document.getElementById('correct-ans').value
  //     LessonQuestion.createSA(lessonId, {
  //       lesson_id: lessonId,
  //       question: questionPrompt,
  //       answer: correctAnswer
  //     }).then(result => {
  //       document.getElementById('question-area').innerHTML = ''
  //       console.log(result)
  //     })
  //   })
  // })
}

const renderQuestions = (questions) => {
  const questionList = questions.map(question => {
    return renderQuestion(question)
  }).join('')
  document.getElementById('question-area').innerHTML = questionList
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
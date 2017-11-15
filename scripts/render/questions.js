const renderAddQuestionForm = () => {

  document.getElementById('add-mc').addEventListener('click', (e) => {
    document.getElementById('add-questions').innerHTML += mcQuestion()
    document.getElementById('addMCQuestion').addEventListener('click', e => {
      e.preventDefault()
      const questionPrompt = document.getElementById('qprompt').value
      const answerA = document.getElementById('ans-a').value
      const answerB = document.getElementById('ans-b').value
      const answerC = document.getElementById('ans-c').value
      const answerD = document.getElementById('ans-d').value
      const correctAnswer = document.getElementById('correct-ans').value
      LessonQuestion.createMC(lessonId, {
        lesson_id: lessonId,
        question: questionPrompt,
        answer_a: answerA,
        answer_b: answerB,
        answer_c: answerC, 
        answer_d: answerD,
        answer: correctAnswer
      }).then(result => {
        document.getElementById('add-questions').innerHTML = ''
        console.log(result)
      })
    })

  document.getElementById('add-sa').addEventListener('click', (e) => {
    document.getElementById('add-questions').innerHTML += saQuestion()
    document.getElementById('addSAQuestion').addEventListener('click', e => {
      e.preventDefault()
      const questionPrompt = document.getElementById('qprompt').value
      const answer = document.getElementById('correct-ans').value
      LessonQuestion.createSA(lessonId, {
        lesson_id: lessonId,
        question: questionPrompt,
        answer: correctAnswer
      }).then(result => {
        document.getElementById('add-questions').innerHTML = ''
        console.log(result)
      })
    })
  })
})
}
  
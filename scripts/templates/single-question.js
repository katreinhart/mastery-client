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

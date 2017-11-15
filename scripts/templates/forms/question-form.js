const mcQuestion = (question = { question: '', answer_a: '', answer_b: '', answer_c: '', answer_d: '', answer: '' }) => {
  
  return `
    <form id="new-mc">
      <div class="form-group">
        <label for="question-prompt">Question</label>
        <input id="qprompt" type="text" placeholder="Question prompt" value="${question.question}">
      </div>
      <div class="form-group">
        <label for="question-prompt">A.</label>
        <input id="ans-a" type="text" placeholder="Answer choice A" value="${question.answer_a}">
      </div>
      <div class="form-group">
        <label for="question-prompt">B.</label>
        <input id="ans-b" type="text" placeholder="Answer Choice B" value="${question.answer_b}">
      </div>
        <div class="form-group">
        <label for="question-prompt">C.</label>
        <input id="ans-c" type="text" placeholder="Answer Choice C" value="${question.answer_c}">
      </div>
      <div class="form-group">
        <label for="question-prompt">D.</label>
        <input id="ans-d" type="text" placeholder="Answer Choice D" value="${question.answer_d}">
      </div>
      <select class="custom-select" id="correct-ans">
        <option selected disabled>Correct answer value:</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
      <button class="btn lime darken-2" for="addQuestion" id="addMCQuestion">Save</button>
    </form>
  `
}

const saQuestion = (question) => {
  return `
  <form>
    <div class="form-group">
      <label for="question-prompt">Question</label>
      <input type="text" placeholder="Question prompt" value="${question.question}">
    </div>
    <div class="form-group">
      <label for="question-prompt">A.</label>
      <input type="text" placeholder="Sample correct answer" value="${question.answer}">
    </div>
    <button for="addQuestion" id="addSAQuestion">Save</button>
  </form>
    `
}
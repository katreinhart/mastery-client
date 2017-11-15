const mcQuestion = (question = { question: '', answer_a: '', answer_b: '', answer_c: '', answer_d: '', answer: '' }) => {
  const buttonId = question.id ? `submit-edit-${question.id}` : `addMCquestion`
  const correctAnswer = question.answer !== '' ? '' : question.answer 
  
  return `
    <div id="new-mc-container">
      <form id="new-mc">
        <div class="form-group">
          <label for="question-prompt">Question</label>
          <input id="qprompt" required type="text" placeholder="Question prompt" value="${question.question}">
        </div>
        <div class="form-group">
          <label for="question-prompt">A.</label>
          <input id="ans-a" required type="text" placeholder="Answer choice A" value="${question.answer_a}">
        </div>
        <div class="form-group">
          <label for="question-prompt">B.</label>
          <input id="ans-b" required type="text" placeholder="Answer Choice B" value="${question.answer_b}">
        </div>
          <div class="form-group">
          <label for="question-prompt">C.</label>
          <input id="ans-c" required type="text" placeholder="Answer Choice C" value="${question.answer_c}">
        </div>
        <div class="form-group">
          <label for="question-prompt">D.</label>
          <input id="ans-d" required type="text" placeholder="Answer Choice D" value="${question.answer_d}">
        </div>
        <select required class="custom-select" id="correct-ans">
          <option selected disabled value ="">Correct answer:</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        <button class="btn btn-sm lime darken-2" for="submit" id="${buttonId}">Save</button><span id="delete-question"></span>
      </form>
    </div>
  `
}

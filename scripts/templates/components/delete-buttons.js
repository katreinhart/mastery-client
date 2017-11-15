
const deleteCourseModalButton = (disable) => {
  const disabledInfo = disable ? 'disabled aria-disabled="true" title="Cannot delete course with dependent lessons" tabindex="-1"' : ''
  const buttonText = disable ? 'Delete' : 'Delete this course'
  const buttonExplanation = disable? '<small>Cannot delete course with dependent lessons</small>' : ''

  return `<!-- Button trigger modal -->
    <button type="button" ${disabledInfo} class="btn orange darken-2" data-toggle="modal" data-target="#confirmDeleteCourse">
      ${buttonText}
    </button>
    ${buttonExplanation}
    <!-- Modal -->
    <div class="modal fade" id="confirmDeleteCourse" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteCourseModal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmDeleteCourseModal">Are you sure?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this Course?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn gray" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn orange darken-2" data-dismiss="modal" id="confirm-delete">Delete</button>
          </div>
        </div>
      </div>
    </div>`
}


const deleteClassModalButton = (disable) => {
  const disabledInfo = disable ? 'disabled aria-disabled="true" title="Cannot delete class with enrolled students" tabindex="-1"' : ''
  const buttonText = disable ? 'Delete' : 'Delete this class'
  const buttonExplanation = disable? '<small>Cannot delete class with enrolled students</small>' : ''

  return `<!-- Button trigger modal -->
    <button type="button" ${disabledInfo} class="btn orange darken-2" data-toggle="modal" data-target="#confirmDeleteClass">
      ${buttonText}
    </button>
    ${buttonExplanation}
  <!-- Modal -->
  <div class="modal fade" id="confirmDeleteClass" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteClassModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteClassModal">Are you sure?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this class?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn gray" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn orange darken-2" data-dismiss="modal" id="confirm-delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
  `
}

const teacherDeleteButton = (disable) => {
  const disabledInfo = disable ? 'disabled aria-disabled="true" title="Cannot delete teacher while assigned to classes" tabindex="-1"' : ''
  const buttonText = disable ? 'Delete' : 'Delete this teacher'
  const buttonExplanation = disable? '<small>Cannot delete teacher while assigned to classes</small>' : ''

  return `<!-- Button trigger modal -->
    <button type="button" ${disabledInfo} class="btn orange darken-2" data-toggle="modal" data-target="#confirmDeleteTeacher">
      ${buttonText}
    </button>
    ${buttonExplanation}
  <!-- Modal -->
  <div class="modal fade" id="confirmDeleteTeacher" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteTeacherModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteTeacherModal">Are you sure?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this Teacher?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn gray" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn orange darken-2" data-dismiss="modal" id="confirm-delete">Delete</button>
        </div>
      </div>
    </div>
  </div>`  
}


const deleteUnitModalButton = (disable) => {
  const disabledInfo = disable ? 'disabled aria-disabled="true" title="Cannot delete unit with dependent lessons"' : ''
  const buttonText = disable ? 'Delete' : 'Delete this unit'

  return `<!-- Button trigger modal -->
    <button type="button" ${disabledInfo} class="btn orange darken-2" data-toggle="modal" data-target="#confirmDeleteUnit">
      ${buttonText}
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="confirmDeleteUnit" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteUnitModal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmDeleteUnitModal">Are you sure?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this unit?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn gray" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn orange darken-2" data-dismiss="modal" id="confirm-delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `
}


const deleteModalLessonButton = () => {
  return `<!-- Button trigger modal -->
  <button type="button" class="btn orange darken-2" data-toggle="modal" data-target="#confirmDeleteLesson">
    Delete this lesson
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="confirmDeleteLesson" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteLessonModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteLessonModal">Are you sure?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this lesson? All associated questions will be lost. 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn gray" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn orange darken-2" data-dismiss="modal" id="confirm-delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
  `
}


const deleteStudentButton = () => {
  return `<!-- Button trigger modal -->
  <button type="button" class="btn orange darken-2" data-toggle="modal" data-target="#confirmDeleteStudent">
    Delete Student
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="confirmDeleteStudent" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteStudentModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteStudentModal">Are you sure?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this Student?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn gray" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn orange darken-2" data-dismiss="modal" id="confirm-delete">Delete</button>
        </div>
      </div>
    </div>
  </div>`  
}

const deleteQuestionButton = () => {
  return `<!-- Button trigger modal -->
  <button type="button" class="btn btn-sm orange darken-2" data-toggle="modal" data-target="#confirmDeleteQuestion">
    Delete Question
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="confirmDeleteQuestion" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteQuestionModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteQuestionModal">Are you sure?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this question?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn gray" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn orange darken-2" data-dismiss="modal" id="confirm-delete-question">Delete</button>
        </div>
      </div>
    </div>
  </div>`  
}


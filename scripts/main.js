homeView.init()

const handleHashChange = () => {
  const hash = window.location.hash.substr(1).split('/').filter(item => item !== "")
  if (!hash.length) homeView.init()
  if(hash[0] === 'courses') {
    if (hash.length === 1) {
      displayCourses()
    } else if (hash.length === 2) {
      if (hash[1] === 'new') {
        displayCourseForm()
      } else {
        displayOneCourse(hash[1])
      } 
    } else if (hash.length === 3) {
      if (hash[2] === 'edit') {
        displayCourseForm(hash[1])
      } 
    } else if (hash.length === 4) {
      if (hash[3] === 'new') {
        displayUnitForm(hash[1])
      } else {
        displayOneUnit(hash[1], hash[3])
      }
    } else if (hash.length === 5) {
      if(hash[4] === 'edit') {
        displayUnitForm(hash[1],hash[3])
      } else {
        displayOneUnit(hash[1], hash[3])
      }
    } else if (hash.length === 6) {
      if(hash[5] === 'new') {
        displayLessonForm(hash[1],hash[3])
      } else {
        displayOneLesson(hash[1],hash[3],hash[5])
      }
    } else if(hash.length === 7) {
      if(hash[6] === 'edit') {
        displayLessonForm(hash[1], hash[3], hash[5])
      } 
    }
  } else if (hash[0] === 'classes') {
    if(hash.length === 1) {
      displayClasses()
    } else if (hash.length === 2) {
      if (hash[1] === 'new') {
        displayClassForm()
      } else {
        displayOneClass(hash[1])
      }
    }  else if (hash.length === 4) {
      if(hash[3] === 'new') {
        displayNewStudentForm(hash[1])
      }
    }
  }
}

window.addEventListener('hashchange', handleHashChange)

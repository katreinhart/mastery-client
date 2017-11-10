homeView.init()

const handleHashChange = () => {
  const hash = window.location.hash.substr(1).split('/').filter(item => item !== "")
  if (!hash.length) homeView.init()
  if (hash.length === 1) {
    if (hash[0] === 'courses') displayCourses()
    else if (hash[0] === 'classes') {} // displayClasses()
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

  // switch(hash.length) {
    
  //   case 1: case 2: 
  //     if(hash[1] === 'new') {
  //       displayCourseForm()
  //     }
  //     else if(hash[1] && hash[0] === 'courses') {
  //       displayOneCourse(hash[1])
  //     } else if(hash[0] === 'courses') {
  //       displayCourses()
  //     }
  //     else if (hash[0] === 'classes') {}
  //     break;
  //   case 3: 
  //     if(hash[2] === 'edit') {
  //       displayCourseForm(hash[1])
  //     }
  //     break
  //   case 4:
  //     if(hash[3] === 'new') {
  //       displayUnitForm(hash[1])
  //     } else {
  //       displayOneUnit(hash[1], hash[3])
  //     }
  //   case 5:
  //     if(hash[4] === 'edit') {
  //       displayUnitForm(hash[1],hash[3])
  //     } else {
  //       displayOneUnit(hash[1], hash[3])
  //     }
  //     break
  //   case 6: 
  //     if(hash[5] === 'new') {
  //       displayLessonForm(hash[1],hash[3])
  //     } else {
  //       displayOneLesson(hash[1],hash[3],hash[5])
  //     }
  // } 
}

window.addEventListener('hashchange', handleHashChange)

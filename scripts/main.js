homeView.init()

const handleHashChange = () => {
  const hash = window.location.hash.substr(1).split('/').filter(item => item !== "")
  switch(hash.length) {
    case 0: 
      homeView.init()
      break
    case 1: case 2: 
      if(hash[1] === 'new') {
        displayCourseForm()
      }
      else if(hash[1] && hash[0] === 'courses') {
        displayOneCourse(hash[1])
      } else if(hash[0] === 'courses') {
        displayCourses()
      }
      else if (hash[0] === 'classes') {}// classView.init() 
      break;
    case 3: 
      if(hash[2] === 'edit') {
        displayCourseForm(hash[1])
      }
      break
    case 4:
      if(hash[3] === 'new') {
        console.log('make new unit')
        displayUnitForm(hash[1])
      }
  } 
}

window.addEventListener('hashchange', handleHashChange)

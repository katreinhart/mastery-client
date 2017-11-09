homeView.init()

const handleHashChange = () => {
  const hash = window.location.hash.substr(1).split('/').filter(item => item !== "")
  switch(hash.length) {
    case 0: 
      homeView.init()
      break
    case 1: case 2: 
      if(hash[1] && hash[0] === 'courses') {
        displayOneCourse(hash[1])
      } else if(hash[0] === 'courses') {
        displayCourses()
      }
      else if (hash[0] === 'classes') {}// classView.init() 
      break;

  }
}

window.addEventListener('hashchange', handleHashChange)
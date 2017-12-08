const displayClasses = () => {
  updateHash(`#/classes`)
  nav.init()
  Class.index().then(result => {
    const { classes } = result.data
    mainContent.innerHTML = ''
    mainContent.appendChild(classesTemplate(classes))
  })
}

const displayOneClass = (classId) => {
  updateHash(`#/classes/${classId}`)
  Class.show(classId).then(result => {
    Class.getRoster(classId).then(rosterResult => {
      const { roster } = rosterResult.data
      // Be consistent wherever possible
      const [ group ] = result.data.group
      mainContent.innerHTML = singleClassTemplate(group, roster)
    })
  })
}

const displayClassForm = (id) => {
  const classPromise = id ? Class.show(id) : Class.index()
  const teacherPromise = Teachers.index()

  // Big code blocks like this -- with lots of if/else statements
  // are prime for some refactoring! Separating out functions
  // and returning early could help with clarity
  Promise.all([classPromise, teacherPromise]).then(result => {
    const [ { data: { group }}, { data: { teachers }}] = result
    if(!group) {
      mainContent.innerHTML = classFormTemplate(teachers)
      document.getElementById('create').addEventListener('submit', handleClassFormSubmit)
    } else {
      const [ myClass ] = group
      mainContent.innerHTML = classFormTemplate(teachers, myClass)
      ClassStudent.index(myClass.class_id).then(result => {
        const { roster } = result.data
        if(roster.length) {
          document.getElementById('delete-button').innerHTML = deleteClassModalButton(true)
        }
        else {
          document.getElementById('delete-button').innerHTML = deleteClassModalButton(false)
          document.getElementById('confirm-delete').addEventListener('click', (e) => {
            Class.delete(id).then(response => {
              displayClasses()
            })
          })
        }
      })
      document.getElementById('edit').addEventListener('submit', handleClassFormSubmit)  
    }
  })
}

const handleClassFormSubmit = (e) => {
  e.preventDefault()
  const id = parseHash()[1]
  const name = document.getElementById('className').value
  const teacher_id = document.getElementById('teacherId').value

  // your way looks great! another way that could work...
  const method = id === 'new' ? 'create' : 'update'
  Class[method]({ name, teacher_id }).then(response => {
    const [ group ] = response.data.group
    displayOneClass(group.id)
  })
}


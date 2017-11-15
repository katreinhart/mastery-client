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
      const [group] = result.data.group
      mainContent.innerHTML = singleClassTemplate(group, roster)
    })
  })
}

const displayClassForm = (id) => {
  const classPromise = id ? Class.show(id) : Class.index()
  const teacherPromise = Teachers.index()

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

  if(id === 'new') {
    Class.create({ name, teacher_id }).then(response => {
      const [ group ] = response.data.group
      displayOneClass(group.id)
    })
  } else {
    Class.update(id, { name, teacher_id }).then(response => {
      const [ group ] = response.data.group
      displayOneClass(group.id)
    })
  }
}

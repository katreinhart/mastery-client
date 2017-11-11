displayClasses = () => {
  updateHash('#/classes')
  Class.index().then(result => {
    const { classes } = result.data
    mainContent.innerHTML = ''
    mainContent.appendChild(classesTemplate(classes))
  })
}

displayOneClass = (classId) => {
  updateHash(`#/classes/${classId}`)
  Class.show(classId).then(result => {
    Class.getRoster(classId).then(rosterResult => {
      const { roster } = rosterResult.data
      const [group] = result.data.group
      mainContent.innerHTML = singleClassTemplate(group, roster)
    })
  })
}

displayClassForm = () => {
  updateHash(`#/classes/new`)
  Teachers.index().then(result => {
    const { teachers } = result.data
    console.log(teachers)
    mainContent.innerHTML = classFormTemplate('POST', teachers)
    document.getElementById('create').addEventListener('submit', (e) => {
      e.preventDefault()
      const name = document.getElementById('className').value
      const teacher_id = document.getElementById('teacherId').value
      Class.create({ name, teacher_id }).then(response => {
        const [ group ] = response.data.group
        displayOneClass(group.id)
      })
    })
  })
}
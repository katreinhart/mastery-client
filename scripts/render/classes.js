displayClasses = () => {
  window.location.href = '#/classes'
  Class.index().then(result => {
    const { classes } = result.data
    document.getElementById('main-content').innerHTML = ''
    document.getElementById('main-content').appendChild(classesTemplate(classes))
  })
}

displayOneClass = (classId) => {
  window.location.href = `#/classes/${classId}`
  Class.show(classId).then(result => {
    Class.getRoster(classId).then(rosterResult => {
      const { roster } = rosterResult.data
      const [group] = result.data.group
      document.getElementById('main-content').innerHTML = singleClassTemplate(group, roster)
    })
  })
}
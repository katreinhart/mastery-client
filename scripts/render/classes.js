displayClasses = () => {
  window.location.href = '#/classes'
  Class.index().then(result => {
    const { classes } = result.data
    document.getElementById('main-content').innerHTML = ''
    document.getElementById('main-content').appendChild(classesTemplate(classes))
  })
}
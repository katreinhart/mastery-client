const classesTemplate = (classes) => {
  const classList = document.createElement('DIV')
  classList.classList.add('row')

  classes.forEach(group => {
    const classDiv = document.createElement('div')
    classDiv.classList = 'col-sm-6 col-md-4'

    const classButton = document.createElement('a')
    classButton.classList = 'btn blue darken-4 class-button'
    classButton.textContent = group.name
    classButton.href = `#/classes/${group.id}`

    classDiv.appendChild(classButton)
    
    classList.appendChild(classDiv)
  })
  const newclassButton = document.createElement('a')
  newclassButton.textContent = "Add new class"
  newclassButton.classList = 'btn btn lime darken-2 class-button'
  newclassButton.href = `#/classes/new`

  const goHomeButton = document.createElement('a')
  goHomeButton.textContent = "Back to home"
  goHomeButton.classList = 'btn orange darken-2 class-button'
  goHomeButton.href = '#'
  
  classList.appendChild(newclassButton)
  classList.appendChild(goHomeButton)
  return classList
}
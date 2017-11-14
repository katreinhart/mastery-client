const navTemplate = () => {
  return `
  <nav class="navbar navbar-toggleable-md navbar-dark bg-dark">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Mastery</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/classes">Classes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/courses">Courses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/students">Students</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/teachers">Teachers</a>
      </li>
      <li class="nav-item">
        <a class="disabled nav-link" href="#/student-view">Student View</a>
      </li>
    </ul>
  </div>
</nav>`
}
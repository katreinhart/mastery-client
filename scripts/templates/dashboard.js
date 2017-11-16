const dashboardTemplate = () => {
  return `
  <div class="container">
    <div class="row dashboard">
      <div class="col-12">
        <h1 class="display-3 text-center indigo-text">Mastery LMS</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <a href="#/courses" class="btn blue darken-4 dashboard-button" id="dashboard-courses">Courses</a>
      </div>
      <div class="col-sm-6">
        <a href="#/classes" class="btn blue darken-4 dashboard-button" id="dashboard-classes">Classes</a>
      </div>
    </div>
    <div class="row">
    <div class="col-sm-6">
      <a href="#/students" class="btn blue darken-4 dashboard-button" id="dashboard-students">Students</a>
    </div>
    <div class="col-sm-6">
      <a href="#/teachers" class="btn blue darken-4 dashboard-button" id="dashboard-teachers">Teachers</a>
    </div>
  </div>
  </div>
`
}

const dashboardTemplate = () => {
  return `
  <div class="container">
    <div class="row dashboard">
      <div class="col-sm-6">
        <a href="#/courses" class="btn btn-info dashboard-button" id="dashboard-courses">Courses</a>
      </div>
      <div class="col-sm-6">
        <a href="#/classes" class="btn btn-info dashboard-button" id="dashboard-classes">Classes</a>
      </div>
    </div>
    <div class="row">
    <div class="col-sm-6">
      <a href="#/students" class="btn btn-info dashboard-button" id="dashboard-students">Students</a>
    </div>
    <div class="col-sm-6">
      <a href="#/teachers" class="btn btn-info dashboard-button" id="dashboard-teachers">Teachers</a>
    </div>
  </div>
  </div>
`
}
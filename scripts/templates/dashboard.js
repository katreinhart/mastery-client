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
  </div>
`
}
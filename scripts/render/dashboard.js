window.homeView = {
  init() {
    nav.init()
    document.getElementById('main-content').innerHTML = dashboardTemplate()
    document.getElementById('dashboard-courses').addEventListener('click', () => {
      courseView.init()
    })
  }
}

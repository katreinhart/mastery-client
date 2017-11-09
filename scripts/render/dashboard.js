window.homeView = {
  init() {
    window.location.hash = '#'
    nav.init()
    document.getElementById('main-content').innerHTML = dashboardTemplate()
    document.getElementById('dashboard-courses').addEventListener('click', () => {
      courseView.init()
    })
  }
}

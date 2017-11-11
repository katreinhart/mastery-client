window.homeView = {
  init() {
    updateHash('#')
    nav.init()
    mainContent.innerHTML = dashboardTemplate()
  }
}

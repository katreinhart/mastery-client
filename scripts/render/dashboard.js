window.homeView = {
  init() {
    window.location.hash = '#'
    nav.init()
    document.getElementById('main-content').innerHTML = dashboardTemplate()
    
  }
}

const localhostURL = 'http://localhost:3000'
// const herokuURL = 'https://kat-mastery-server.herokuapp.com'

// const baseURL = window.location.href.includes('surge.sh') ? herokuURL : localhostURL
const baseURL = localhostURL

const mainContent = document.getElementById('main-content')

const updateHash = (newHash) => {
  window.location.hash = newHash
}

const parseHash = () => {
  return window.location.hash.substr(1).split('/').filter(item => item !== "")
}

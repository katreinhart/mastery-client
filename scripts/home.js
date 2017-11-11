const localhostURL = 'http://localhost:3000'
const herokuURL = ''
const baseURL = window.location.href.includes('127.0.0.1') ? localhostURL : herokuURL

const mainContent = document.getElementById('main-content')

const updateHash = (newHash) => {
  window.location.hash = newHash
}

const parseHash = () => {
  return window.location.hash.substr(1).split('/').filter(item => item !== "")
}
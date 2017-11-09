const singleLessonTemplate = (lesson) => {
  let hash = window.location.hash.split('/')
  hash.pop()
  hash = hash.join('/')
  const { id, title, content } = lesson 
  return `
  <div class="container">
    <div class="row">
      <div class="col-sm-12"><h3>${title}</h3></div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-lg-4">
        
      </div>
      <div class="col-sm-6 col-lg-8">
        <p>${content}</p>
        <a href="${hash}/${id}/edit">Edit lesson</a>
      </div>
      <a href="${hash}/">Back to lessons</a>
    </div>
  </div>
`
}
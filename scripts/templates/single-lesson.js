const singleLessonTemplate = (lesson) => {
  const hash = window.location.hash.split('/').filter(item => item !== "")
  hash.pop()
  const back = hash.join('/')
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
        <a href="${back}/${id}/edit">Edit lesson</a>
      </div>
      <a href="${back}/">Back to lessons</a>
    </div>
  </div>
`
}
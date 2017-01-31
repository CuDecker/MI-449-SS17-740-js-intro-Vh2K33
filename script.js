var boomButton = document.getElementById('boom')

var boom = document.getElementById('boomAudio')

var kickButton = document.getElementById('kick')

var kick = document.getElementById('kickAudio')

var snareButton = document.getElementById('snare')

var snare = document.getElementById('snareAudio')

boomButton.addEventListener('click', function () {
  boom.play()
})

boomButton.addEventListener('mouseenter', function () {
  boom.play()
})

kickButton.addEventListener('click', function () {
  kick.play()
})

kickButton.addEventListener('mouseenter', function () {
  kick.play()
})

snareButton.addEventListener('click', function () {
  snare.play()
})

snareButton.addEventListener('mouseenter', function () {
  snare.play()
})

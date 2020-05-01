const btn = document.querySelector('.dark')
const img = document.querySelector('.displayed-img')
const overlay = document.querySelector('.overlay')
const overlayStyles = getComputedStyle(overlay)
const thumbnailBar = document.querySelector('.thumb-bar')

for (let i = 1; i <= 5; i++) {
  const imgEl = document.createElement('img')
  imgEl.src = `./images/pic${i}.jpg`

  thumbnailBar.appendChild(imgEl)
}

/* Darken/Lighten button */

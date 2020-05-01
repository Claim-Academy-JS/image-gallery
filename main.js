const btn = document.querySelector('.dark')
const img = document.querySelector('.displayed-img')
const imgStyle = window.getComputedStyle(img)
const overlay = document.querySelector('.overlay')
const overlayStyle = window.getComputedStyle(overlay)
const thumbnailBar = document.querySelector('.thumb-bar')

for (let i = 1; i <= 5; i++) {
  const imgEl = document.createElement('img')
  imgEl.src = `./images/pic${i}.jpg`

  imgEl.addEventListener('click', function () {
    console.log(this)
  })

  thumbnailBar.appendChild(imgEl)
}

/* Darken/Lighten button */
btn.addEventListener('click', () => {
  // EXPLICITLY CONVERT to a NUMBER for more reliable results
  if (Number(overlayStyle.getPropertyValue('--height')) === 0) {
    overlay.style.setProperty('--height', imgStyle.getPropertyValue('height'))
  } else {
    overlay.style.setProperty('--height', '0')
  }
})

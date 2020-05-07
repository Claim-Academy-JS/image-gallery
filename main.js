const btn = document.querySelector('button')
const displayedImg = document.querySelector('.displayed-img')
const displayedImgStyle = window.getComputedStyle(displayedImg)
const overlay = document.querySelector('.overlay')
const overlayStyle = window.getComputedStyle(overlay)
const thumbnailBar = document.querySelector('.thumb-bar')

// TODO: Consider adding some animation on 'src' change...😅

for (let i = 1; i <= 5; i++) {
  const img = document.createElement('img')
  img.src = `./images/pic${i}.jpg`

  img.addEventListener('click', () => {
    // 'img' is in SCOPE
    displayedImg.src = img.src
  })

  thumbnailBar.appendChild(img)
}

/* Darken/Lighten button */
btn.addEventListener('click', () => {
  // 'parseInt' to avoid confusions with 'string' vs 'number' and units, etc.
  if (parseInt(overlayStyle.getPropertyValue('--height')) === 0) {
    overlay.style.setProperty('--height', displayedImgStyle.getPropertyValue('height'))
  } else {
    overlay.style.setProperty('--height', '0')
  }
})

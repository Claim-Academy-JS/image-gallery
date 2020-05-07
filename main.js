const btn = document.querySelector(button)
const displayedImg = document.querySelector('.displayed-img')
const displayedImgStyle = window.getComputedStyle(displayedImg)
const overlay = document.querySelector('.overlay')
const overlayStyle = window.getComputedStyle(overlay)
const thumbnailBar = document.querySelector('.thumb-bar')

// TODO: Consider adding some animation on 'src' change...😅

for (let i = 1; i <= 5; i++) {
  const imgEl = document.createElement('img')
  imgEl.src = `./images/pic${i}.jpg`

  imgEl.addEventListener('click', () => {
    // 'imgEl' is in SCOPE
    displayedImg.src = imgEl.src
  })

  thumbnailBar.appendChild(imgEl)
}

/* Darken/Lighten button */
btn.addEventListener('click', () => {
  // EXPLICITLY CONVERT to a NUMBER for more reliable results
  if (Number(overlayStyle.getPropertyValue('--height')) === 0) {
    overlay.style.setProperty('--height', displayedImgStyle.getPropertyValue('height'))
  } else {
    overlay.style.setProperty('--height', '0')
  }
})

// https://stackoverflow.com/a/27568129
let canUseSVG = !!(
  document.createElementNS &&
  document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
)

function useFallback (ignore, type) {
  if (!canUseSVG) {
    const images = Array.from(document.getElementsByTagName('img'))

    if (images.length === 0) {
      return
    }

    images.forEach(img => {
      if (ignore && img.classList.contains(ignore)) {
        return
      }

      const src = img.getAttribute('src')

      if (!src.length || !/\.svg$/.test(src)) {
        return
      }

      const newSrc = src.replace('.svg', `.${type}`)
      img.setAttribute('src', newSrc)
    })
  }
}

function svgFallback ({ ignore = '', type = 'png', dev = false } = {}) {
  useFallback(ignore, type)

  if (dev) {
    canUseSVG = false
  }

  useFallback(ignore, type)

  return {
    update: (newIgnore, newType) =>
      useFallback(newIgnore || ignore, newType || type)
  }
}

export default svgFallback

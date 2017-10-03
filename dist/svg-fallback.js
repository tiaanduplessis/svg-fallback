(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.svgFallback = factory());
}(this, (function () { 'use strict';

// https://stackoverflow.com/a/27568129
var canUseSVG = !!(
  document.createElementNS &&
  document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
);

function useFallback (ignore, type) {
  if (!canUseSVG) {
    var images = Array.from(document.getElementsByTagName('img'));

    if (images.length === 0) {
      return
    }

    images.forEach(function (img) {
      if (ignore && img.classList.contains(ignore)) {
        return
      }

      var src = img.getAttribute('src');

      if (!src.length || !/\.svg$/.test(src)) {
        return
      }

      var newSrc = src.replace('.svg', ("." + type));
      img.setAttribute('src', newSrc);
    });
  }
}

function svgFallback (ref) {
  if ( ref === void 0 ) ref = {};
  var ignore = ref.ignore; if ( ignore === void 0 ) ignore = '';
  var type = ref.type; if ( type === void 0 ) type = 'png';
  var dev = ref.dev; if ( dev === void 0 ) dev = false;

  useFallback(ignore, type);

  if (dev) {
      canUseSVG = false;
  }

  useFallback(ignore, type);

  return {
    update: function (newIgnore, newType) { return useFallback(newIgnore || ignore, newType || type); }
  }
}

return svgFallback;

})));

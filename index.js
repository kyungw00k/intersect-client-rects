function reduce (arr, fn, accumulator) {
  var idx = -1
  var len = arr.length

  if (!accumulator && len > 0) {
    accumulator = arr[++idx]
  }

  while (++idx < len) {
    accumulator = fn(accumulator, arr[idx], idx, arr)
  }
  return accumulator
}

function intersectClientRects ( /* rect1, rect2, ... rectN */) {
  return reduce(
    Array.prototype.slice.call(arguments),
    function (acc, cur) {
      var clip = {
        top: Math.max(acc.top, cur.top),
        left: Math.max(acc.left, cur.left),
        right: Math.min(acc.right, cur.right),
        bottom: Math.min(acc.bottom, cur.bottom)
      }

      clip.width = clip.right - clip.left
      clip.height = clip.bottom - clip.top

      return clip
    })
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = intersectClientRects
} else {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return intersectClientRects
    })
  } else {
    window.intersectClientRects = intersectClientRects
  }
}

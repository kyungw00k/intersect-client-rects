/* global describe, it */

var assert = require('assert')
var intersectClientRects = require('./index')

describe('intersect-client-rects', function () {
  it('single rect', function () {
    var clip = intersectClientRects({
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    })

    assert.deepEqual(clip, {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    })
  })

  it('two rects', function () {
    var clip = intersectClientRects(
      {
        left: 0,
        top: 0,
        right: 200,
        bottom: 200
      },
      {
        left: 100,
        top: 100,
        right: 300,
        bottom: 300
      }
    )
    assert.deepEqual(clip, {
      left: 100,
      top: 100,
      right: 200,
      bottom: 200,
      width: 100,
      height: 100
    })
  })

  it('multiple rects', function () {
    var clip = intersectClientRects(
      {
        left: 0,
        top: 0,
        right: 200,
        bottom: 200
      },
      {
        left: 100,
        top: 100,
        right: 300,
        bottom: 300
      },
      {
        left: 200,
        top: 200,
        right: 200,
        bottom: 200
      }
    )
    assert.deepEqual(clip, {
      left: 200,
      top: 200,
      right: 200,
      bottom: 200,
      width: 0,
      height: 0
    })
  })
})

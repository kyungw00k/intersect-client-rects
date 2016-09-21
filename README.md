# intersect-client-rects [![Build Status](https://travis-ci.org/kyungw00k/intersect-client-rects.svg?branch=master)](https://travis-ci.org/kyungw00k/intersect-client-rects)
Find the intersection area of multiple client rects

## Install
```
$ npm install intersect-client-rects
```

## API
intersectClientRects(rect1, rect2 ... rectN)

```
var intersectClientRects = require('intersect-client-rects')

intersectClientRects(
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
// => { left: 100, top: 100, right: 200, bottom: 200, width: 100, height: 100}
```

## License
[MIT](https://kyungw00k.mit-license.org/)

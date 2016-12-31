# Nike+ Running - React Native

UI & UX Prototype of redesigned Nike+ Running App.

![proto](https://d13yacurqjgara.cloudfront.net/users/68551/screenshots/2764470/ezgif-3422165510.gif)

Inspiration: https://dribbble.com/shots/2764470-Rethinking-Nike-Running

## Features

- FadedZoom Transition
This will add FadedZoom transition to ex-navigator (you can use it on another project)

```
import FadedZoom from '../animations/FadedZoom';

static route = {
    styles: {
        ...FadedZoom,
    },
};
```

- Swipeable Card
The card can be swiped up-down to toggle hide and left-right to change current card view.

- Geolocation & Animated Marker
The homescreen will show your current location with animated marker

- Box Shadow & Gradient
(iOS only) There will be shadow around the button and cards.

## MIT Licensed

© 2016 Sonny Lazuardi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

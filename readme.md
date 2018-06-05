# Nike+ Running - React Native

UI & UX Prototype of redesigned Nike+ Running App and now support Website 🎉 thanks to [React Native DOM](https://github.com/vincentriemer/react-native-dom)

![proto](./assets/nikerunningwebsite.gif)

![gif](http://i.giphy.com/l3vR7vOmGZYEZwUbC.gif)

![proto](./assets/dribnike.gif)

Inspiration: https://dribbble.com/shots/2764470-Rethinking-Nike-Running

## Demo

Website: http://nikerunning.sonnylab.com/

Expo Snack: https://snack.expo.io/@sonnylazuardi/nike-running-redesign

## Features

- FadedZoom Transition
  This will add forFadedZoom transition to react-navigation (you can use it on another project)

```
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        return forFadedZoom(sceneProps);
      }
    })
```

- Swipeable Card
  The card can be swiped up-down to toggle hide and left-right to change current card view. Pan responder works smooth on the web 💪

- Geolocation & Animated Marker
  The homescreen will show your current location with animated marker. For map the web now still fallback to image, need to work on the map component for RND.

- Box Shadow & Gradient
  (iOS only) There will be shadow around the button and cards. I do some tricky part to achieve the linear gradient. I use gradient image and use similar LinearGradient props:

```
if (Platform.OS != "dom") {
  var LinearGradient = require("react-native-linear-gradient").default;
} else {
  var LinearGradient = require("../components/LinearGradient").default;
}
```

© 2018 Sonny Lazuardi

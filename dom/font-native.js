/**
 * This is the "native" module that runs on the main thread
 * To add this to the bridge the exported class gets added to the `nativeModules` array in the `bootstrap.js` file.
 *
 * @flow
 */

import {
  RCT_EXPORT_METHOD,
  RCT_EXPORT_MODULE,
  RCTFunctionTypePromise
} from "react-native-dom";

import FontFaceObserver from "fontfaceobserver";

import type { RCTBridge } from "react-native-dom";

// @RCT_EXPORT_MODULE("FontLoader")
export default class FontLoader {
  bridge: RCTBridge;

  constructor(bridge: RCTBridge) {
    this.bridge = bridge;
  }

  @RCT_EXPORT_METHOD(RCTFunctionTypePromise)
  loadFont(name: string, url: string, resolveId: number, rejectId: number) {
    // generate font-face css string
    const fontStyles = `@font-face {
      src: url(${url});
      font-family: ${name}
    }`;

    // create stylesheet
    const style: any = document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = fontStyles;
    } else {
      style.appendChild(document.createTextNode(fontStyles));
    }

    // inject stylesheet
    if (document.head) {
      document.head.appendChild(style);
    } else {
      return this.bridge.callbackFromId(rejectId);
    }

    // load font
    const font = new FontFaceObserver(name);
    font
      .load()
      .then(this.bridge.callbackFromId(resolveId))
      .catch(this.bridge.callbackFromId(rejectId));
  }
}

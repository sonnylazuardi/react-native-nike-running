/**
 * @flow
 */

import {
  RCT_EXPORT_METHOD,
  RCT_EXPORT_MODULE,
  RCTFunctionTypeNormal,
  RCTEventEmitter,
  RCTFunctionTypePromise
} from "react-native-dom";

import FontFaceObserver from "fontfaceobserver";

import type { RCTBridge } from "react-native-dom";

class FontLoader {
  bridge: RCTBridge;

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
  }

  constructor(bridge: RCTBridge) {
    this.bridge = bridge;
  }
}

let loadFont;
loadFont =
  RCT_EXPORT_METHOD(RCTFunctionTypeNormal)(
    FontLoader.prototype,
    "loadFont",
    (loadFont = Object.getOwnPropertyDescriptor(
      FontLoader.prototype,
      "loadFont"
    ))
  ) || loadFont;
if (loadFont) Object.defineProperty(FontLoader.prototype, "loadFont", loadFont);

export default RCT_EXPORT_MODULE("FontLoader")(FontLoader);

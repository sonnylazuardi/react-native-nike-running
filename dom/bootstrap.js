import { RNDomInstance } from "react-native-dom";
import FontLoader from "./native-modules/FontLoader";

// Path to RN Bundle Entrypoint ================================================
const rnBundlePath = "./entry.bundle?platform=dom&dev=true";

// React Native DOM Runtime Options =============================================
const ReactNativeDomOptions = {
  enableHotReload: false,
  nativeModules: [FontLoader]
};

// App Initialization ============================================================
const app = new RNDomInstance(
  rnBundlePath,
  "nikerunning",
  document.body,
  ReactNativeDomOptions
);

app.start();

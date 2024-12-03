import devConfig from "./dev";

const { miniProgram: { envVersion } } = wx.getAccountInfoSync();
const envVersionConfig = {
  "develop": devConfig,
  // "trial": stageConfig,
  // "release": prodConfig
}
export const config = envVersionConfig[envVersion];

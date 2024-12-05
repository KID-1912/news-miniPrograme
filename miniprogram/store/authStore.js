import { makeAutoObservable } from "mobx-miniprogram";

class AuthStore {
  // typeof authentication = { openid: string, token: string, uid: number } | null
  constructor() {
    const authenticationStorage = wx.getStorageSync("authentication");
    this.authentication = authenticationStorage ? JSON.parse(authenticationStorage) : null;
    makeAutoObservable(this, {}, { autoBind: true });
  }
  get isAuthenticated() {
    return Boolean(this.authentication);
  }
  get openid() {
    return this.authentication?.openid;
  }
  get token() {
    return this.authentication?.token;
  }
  get uid() {
    return this.authentication?.uid;
  }
  getAuthentication() {
    return this.authentication;
  }
  setAuthentication(authentication) {
    this.authentication = authentication;
    wx.setStorageSync("authentication", JSON.stringify(authentication));
  }
  resetAuthentication() {
    this.authentication = null;
    wx.removeStorageSync("authentication");
  }
}
const authStore = new AuthStore();
export default authStore;

// pages/register/register.js
import { createStoreBindings } from "mobx-miniprogram-bindings";
import { behavior as computedBehavior} from "miniprogram-computed"
import { authStore } from "@store/index"

const app = getApp();

Page({
  behaviors: [computedBehavior],
  data: {},
  onLoad: function(){
    this.storeBindings = createStoreBindings(this, {
      store: authStore,
      actions: ["setAuthentication"],
    });
  },
  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },
  async onButtonRegister(event) {
    if (!event.detail) return; // 用户拒绝授权userInfo
    const userInfo = event.detail.userInfo;
    wx.showLoading({title: '加载中...'})
    try {
      // 发起用户信息注册
      const { code: registerCode } = await wx.pro.login();
      const params = {
        code: registerCode,
        encryptedData: event.detail.encryptedData,
        iv: event.detail.iv
      }
      const res = await app.api.fetchWxUserInfoRegister(params);
      // 用户已注册
      if(res.code === 10000) wx.showToast({ title: '用户已存在，尝试登录...', icon: "none" });
      // 自动登录
      const { code: loginCode } = await wx.pro.login();
      const {data: authData} = await app.api.fetchWxLoginAccount({code: loginCode});
      // 缓存登录状态
      this.setAuthentication(authData);
      wx.navigateTo({url: "/pages/index/index"});
    } catch (error) {
      console.warn(error);
      wx.showToast({ title: '注册失败，请稍后重试' });
    }
    wx.hideLoading()
  }
})
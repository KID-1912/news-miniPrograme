//index.js
import { createStoreBindings } from "mobx-miniprogram-bindings";
import { behavior as computedBehavior } from "miniprogram-computed";
import { authStore } from "@store/index";

const app = getApp();

Page({
  behaviors: [computedBehavior],
  data: {
    userState: {},
  },
  onLoad: function () {
    this.storeBindings = createStoreBindings(this, {
      store: authStore,
      fields: ["authentication", "isAuthenticated"],
      actions: ["setAuthentication"],
    });
    // this.getRecommendData();
  },
  onUnload() {
    this.storeBindings.destroyStoreBindings();
  },
  // 获取首页推荐数据
  async getRecommendData() {
    const res = await app.api.fetchHomeRecommend();
    console.log(res);
  },
  // 登录处理
  async handleLogin() {
    wx.showLoading({ title: "加载中..." });
    try {
      const { code } = await wx.pro.login();
      const res = await app.api.fetchWxLoginAccount({ code });
      // 登录成功
      if (res.code === 0) {
        // 缓存登录状态
        this.setAuthentication(res.data);
        wx.showToast({ title: "登录成功", icon: "none" });
      }
      // 用户不存在
      if (res.code === 10000) {
        wx.navigateTo({ url: "pages/register/register" });
        wx.showToast({ title: "用户未注册", icon: "none" });
      }
    } catch (error) {
      console.warn(error);
      wx.showToast({ title: "登录失败，请稍后重试", icon: "none" });
    }
    wx.hideLoading();
  },
});

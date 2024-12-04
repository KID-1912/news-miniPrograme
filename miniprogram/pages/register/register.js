// pages/register/register.js
const app = getApp();

Page({
  data: {},
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
      await app.api.fetchWxUserInfoRegister(params);
      console.log( event.detail)
      // 自动登录
      const { code: loginCode } = await wx.pro.login();
      const {data: userData} = await app.api.fetchWxLoginAccount({code: loginCode});
      // wx.setStorageSync('userState', JSON.stringify(userData))
      console.log(userData);
      const res = await app.api.fetcheUserAccountInfo({loginToken: userData.token});
      console.log(res);
      wx.navigateTo({url: "/pages/index/index"});
    } catch (error) {
      console.warn(error);
      wx.showToast({ title: '注册失败，请稍后重试' })
    }
    wx.hideLoading()
  }
})
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  //  返回云端数据库的banners
  const db = cloud.database();
  const result = await db.collection('banners').get();
  return result.data
}
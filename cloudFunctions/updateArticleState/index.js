// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  // 更新数据库文章的收藏分享状态
  let db = cloud.database();
  let res = await db.collection('articles').doc(event.artId)
  .update({data: event.typeState});
  return res;
}
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database();
  const result = await db.collection('articles').aggregate()
  .match({
    _id: event.artId
  })
  .lookup({
    from: 'authors',
    localField: 'author',
    foreignField: '_id',
    as: 'author',
  }).end();
  return result.list[0];
}
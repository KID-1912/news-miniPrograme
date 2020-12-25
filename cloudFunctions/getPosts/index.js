// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  //  返回云端数据库的banners
  const db = cloud.database();
  const $ = db.command.aggregate;
  let result = db.collection('articles').aggregate()
  .lookup({
    from: 'authors',
    localField: 'author',
    foreignField: '_id',
    as: 'author',
  });
  if(event.post) result = result.project({
    date: true,
    title: true,
    banner: true,
    collection: true,
    reading: true,
    author: {avatar: true},
    content: $.substrCP(['$content',0,80])
  });
  result = await result.end();
  return result.list
}
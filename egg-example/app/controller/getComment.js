const Controller = require('egg').Controller;

class getComment extends Controller{
    async index(){
        const {ctx, service} = this;
        const {tag,itemId,page} = ctx.query;
        /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
        return ctx.body = await  service.requestCache.judge(`
        http://m.you.163.com/xhr/comment/listByItemByTag.json?tag=${tag}itemId=${itemId}page=${page}`});
    }
}

module.exports = getComment;
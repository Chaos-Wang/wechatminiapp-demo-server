const { mysql } = require('../qcloud')

class detail {

    static async fill(ctx){
        var req = ctx.request.body;
      
		console.log(ctx.request.body)
      	var open_id = req.openid; 
      
      
        if(req.openid){
            try{
     			await mysql("cSessionInfo").update({ detail_info: 1 }).where({ open_id })
			    await mysql("cSessionInfo").update({ fact_id: req.fact_id }).where({ open_id })
                await mysql("cSessionInfo").update({ real_name: req.real_name }).where({ open_id })
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '用户认证成功',
                }
            }catch(err){
                ctx.body = {
                    code: 412,
                    msg: '用户认证失败',
                    data: err
                }
            }
        }else {
            ctx.body = {
                code: 416,
                msg: '未找到该用户'
            }
        }
    }

   
    static async check(ctx){
        let req = ctx.request.body;
        var open_id = req.openid; 
      	var res=await mysql("cSessionInfo").where({open_id}).first();
        if(res.detail_info==1){
            try{
                ctx.body = {
                    code: 200,
                    msg: '用户已经完善信息',
                }
            }catch(err){
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                }
            }
        }else {
            ctx.body = {
                code: 416,
                msg: '未找到该用户或用户未完善信息'
            }
        }
    }
}

module.exports = detail;
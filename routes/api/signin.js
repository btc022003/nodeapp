///导入模块包
const express = require('express'),
	  bodyParser = require('body-parser');

// 路由的作用：把发送到特定url的请求转交给响应的请求处理函数
const route = express.Router()

// 处理post请求
route.post('/signin',(req,res)=>{
	console.log(req.body);
	if(req.body.user_pwd=="123456"){
		res.status(200).json({status:"success",msg:"登录成功!"})
	}
	else{
		res.status(200).json({status:"fail",msg:"用户名或密码错误!"})	
	}
})

// module.exports = {
// 	sigin:route
// }
module.exports = route
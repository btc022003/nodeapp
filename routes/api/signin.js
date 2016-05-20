///导入模块包
const express = require('express')
	  // bodyParser = require('body-parser');

// 路由的作用：把发送到特定url的请求转交给响应的请求处理函数
const route = express.Router()

//处理post请求
route.post('/signin',(req,res)=>{
	console.log(req.body);
	if(req.body.user_pwd=="123456"){
		res.status(200).json({status:"success",msg:"登录成功!"})
	}
	else{
		res.status(200).json({status:"fail",msg:"用户名或密码错误!"})	
	}
})



/*

 /////////三个参数的形式，两个处理函数 分先后
route.post('/signin',(req,res,next)=>{
	console.log('我先处理请求')
	next()
},(req,res)=>{
	console.log('我也在处理请求')
	console.log(req.body);
	if(req.body.user_pwd=="123456"){
		res.status(200).json({status:"success",msg:"登录成功!"})
	}
	else{
		res.status(200).json({status:"fail",msg:"用户名或密码错误!"})	
	}
})
*/

// module.exports = {
// 	sigin:route
// }
module.exports = route
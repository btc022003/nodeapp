///导入模块包
const express = require('express'),
	  fs = require('fs')
	  // bodyParser = require('body-parser');

// 路由的作用：把发送到特定url的请求转交给响应的请求处理函数
const route = express.Router()

//处理post请求
route.post('/register',(req,res)=>{
	console.log(req.body);
	const user_name = req.body.user_name

	/////数据验证部分省略实现
	///end
	

	/////文件系统 es6中字符串替换 
	const file_name = `users/${user_name}.json`
	const data={
		user_name:req.body.user_name,
		ip:req.ip,
		time:new Date()
	}

	// 保存文件
	function saveFile(){
		fs.writeFile(file_name,JSON.stringify(data),err=>{
			if(err){
				res.json({status:'fail',msg:'系统错误,保存文件失败'})
			}
			else{
				res.json({status:'success',msg:'注册成功'})
			}
		})
	}
	fs.exists('users',exists=>{
		if(exists){
			// TODO:保存文件
			saveFile()
		}
		else{
			// 创建目录
			fs.mkdir('users',err=>{
				if(err){
					res.json({status:'fail',msg:'系统错误'})
				}
				else{
					// TODO保存文件
					saveFile()
				}
			})
		}
	})

})

module.exports = route
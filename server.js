///导入模块包
const express = require('express'),
	  bodyParser = require('body-parser'),
	  template = require('art-template'),
	  path = require('path')



////top level function
const app = express();


/**
 * art-template的配置部分
 * https://github.com/aui/artTemplate
 */
///***********art-template start
// view engine setup
app.set('views', path.join(__dirname, 'views'));
//——————————————start
//用art-template引擎替换默认的jade引擎
//app.set(‘view engine’, ‘jade’);
template.config('base','');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');
///***********art-template end



// 处理静态页面文件 文件目录为www
app.use(express.static('www'));

// 引入body-parse模块 处理post的数据
app.use(bodyParser.urlencoded({extended:true}));

// 引入模块文件 把登录处理文件放在./routes/api/signin.js文件中
app.use('/api/user',require('./routes/api/signin'))

app.use('/api/user',require('./routes/api/register'))

app.get('/template',(req,res)=>{
	const data = {list: [{id:'1', name:'张三'}, {id:'2', name:'李四'}]}
	// const html = template('./views/index',data)
	// res.render(html)
	// res.end()
	res.render('index', data);
})

// 处理post请求
// app.post('/api/user/signin',(req,res)=>{
// 	console.log(req.body);
// 	if(req.body.user_pwd=="123456"){
// 		res.status(200).json({status:"success",msg:"登录成功!"})
// 	}
// 	else{
// 		res.status(200).json({status:"fail",msg:"用户名或密码错误!"})	
// 	}
// })

app.listen(3000,(req,res)=>{
	console.log('server is listening...');
})


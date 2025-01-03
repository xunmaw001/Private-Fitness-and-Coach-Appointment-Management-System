import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import discussjianshenxiangmu from '@/views/modules/discussjianshenxiangmu/list'
    import jiaolianxinxi from '@/views/modules/jiaolianxinxi/list'
    import xiangmufenlei from '@/views/modules/xiangmufenlei/list'
    import jiaolianpingjia from '@/views/modules/jiaolianpingjia/list'
    import jianshenxiangmu from '@/views/modules/jianshenxiangmu/list'
    import yonghu from '@/views/modules/yonghu/list'
    import jiaolian from '@/views/modules/jiaolian/list'
    import config from '@/views/modules/config/list'
    import liaotianxinxi from '@/views/modules/liaotianxinxi/list'
    import jiaolianyuyue from '@/views/modules/jiaolianyuyue/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '健身资讯',
        component: news
      }
      ,{
	path: '/discussjianshenxiangmu',
        name: '健身项目评论',
        component: discussjianshenxiangmu
      }
      ,{
	path: '/jiaolianxinxi',
        name: '教练信息',
        component: jiaolianxinxi
      }
      ,{
	path: '/xiangmufenlei',
        name: '项目分类',
        component: xiangmufenlei
      }
      ,{
	path: '/jiaolianpingjia',
        name: '教练评价',
        component: jiaolianpingjia
      }
      ,{
	path: '/jianshenxiangmu',
        name: '健身项目',
        component: jianshenxiangmu
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/jiaolian',
        name: '教练',
        component: jiaolian
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/liaotianxinxi',
        name: '聊天信息',
        component: liaotianxinxi
      }
      ,{
	path: '/jiaolianyuyue',
        name: '教练预约',
        component: jiaolianyuyue
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

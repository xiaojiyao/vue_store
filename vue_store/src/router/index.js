import Vue from 'vue'
import Router from 'vue-router'

// 导入路由守卫
import beforeEach from './beforeEach'

// 导入被路由控制的组件
import Login from '@/components/login/Login'
import GoodsList from '@/components/store/goods/List'
import GoodsDetail from '@/components/store/goods/Detail'
import Shopcart from '@/components/store/shopcart/Shopcart'
import OrderCommit from '@/components/store/order/Commit'
import OrderPay from '@/components/store/order/Pay'
import Store from '@/components/store/Store'

// 使用路由插件
Vue.use(Router)

let router = new Router({
  routes: [
    // 登录
    { name: "login", path: "/login", component: Login },
    // 商城首页
    {
      name: "Store", path: "/", component: Store, children: [
        // 商品
        { name: "goodsList", path: "goods/list", component: GoodsList },
        { name: 'goodsDetail', path: 'goods/detail/:id', component: GoodsDetail },
        // 购物车
        { name: 'shopcart', path: 'shopcart', component: Shopcart },
        // 订单
        { name: 'orderCommit', path: 'order/commit', component: OrderCommit },
        { name: 'orderPay', path: 'order/pay', component: OrderPay },
      ]
    },
  ]
})

// 将路由守卫文件传到路由守卫方法里
router.beforeEach(beforeEach)

// 将路由配置导出
export default router

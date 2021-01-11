import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import ('views/home/Home.vue')
const Category = () => import ('views/category/Category.vue')
const Cart = () => import ('views/cart/Cart.vue')
const Me = () => import ('views/me/Me.vue')
//1.安装插件

Vue.use(VueRouter)

//2.创建router
const routes =[
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/me',
    component: Me
  },
]

export default new VueRouter({
  routes,
  mode: "history"
})
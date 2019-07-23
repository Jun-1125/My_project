import { finished } from 'stream';

//在注册路由时不会加载(请求获取)模块对应的打包文件,只有请求对应路由路径才会请求加载
const Home = () => import('../pages/Home/Home.vue')
const Category = () => import('../pages/Category/Category.vue')
const Things = () => import('../pages/Physical/Physical.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const PhoneLogin = () => import('../pages/PhoneLogin/PhoneLogin.vue')
const Phoneregistered = () => import('../pages/Phoneregistered/Phoneregistered.vue')
const EmailLogin = () => import('../pages/EmailLogin/EmailLogin.vue')
const Emailregistered = () => import('../pages/Emailregistered/Emailregistered.vue')

const Select = () => import('../pages/Physical/Select.vue')
const Find = () => import('../pages/Physical/Find.vue')


export default [
    {
      path: '/home',
      component: Home,
      meta: {
        isShowFooter: true
      }
    },

    {
      path: '/category',
      component: Category,
      meta: {
        isShowFooter: true
      }
    },

    {
      path: '/things',
      component: Things,
      meta: {
        isShowFooter: true
      },
      redirect:'/things/find',
      children:[
        {
          path:'/things/find',
          component:Find,
          meta:{
            isShowFooter: true
          }
        }
      ]
    },

   
    {
      path: '/select',
      component: Select,
      meta: {
        isShowFooter: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        isShowFooter: true
      }
    },

    {
      path: '/personal',
      component: Personal,
      meta: {
        isShowFooter: false
      }
    },
    
    {
      path: '/login',
      component: PhoneLogin,
      meta: {
        isShowFooter: false
      }
    },

  {
      path: '/emaillogin',
      component: EmailLogin,
      meta: {
        isShowFooter: false
      }
    },

    {
      path: '/registered',
      component: Phoneregistered,
      meta: {
        isShowFooter: false
      }
    },

    {
      path: '/emailregistered',
      component: Emailregistered,
      meta: {
        isShowFooter: false
      }
    },

    {
      path: '/',
      redirect: 'home'
    }
]
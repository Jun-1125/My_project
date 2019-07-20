//在注册路由时不会加载(请求获取)模块对应的打包文件,只有请求对应路由路径才会请求加载
const Home = () => import('../pages/Home/Home.vue')
const Category = () => import('../pages/Category/Category.vue')
const Physical = () => import('../pages/Physical/Physical.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Login = () => import('../pages/Login/Login.vue')


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
        path: '/physical',
        component: Physical,
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
        component: Login,
        meta: {
            isShowFooter: false
          }
    },
    {
        path: '/',
        redirect: 'home'
    }
]
//在注册路由时不会加载(请求获取)模块对应的打包文件,只有请求对应路由路径才会请求加载
const Home = () => import('../pages/Home/Home.vue')
const Category = () => import('../pages/Category/Category.vue')
const Physical = () => import('../pages/Physical/Physical.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const Personal = () => import('../pages/Personal/Personal.vue')


export default [
    {
        path: '/home',
        component: Home
    },

    {
        path: '/category',
        component: Category
    },

    {
        path: '/physical',
        component: Physical
    },
    
    {
        path: '/shopcart',
        component: ShopCart
    },

    {
        path: '/personal',
        component: Personal
    },
    
    {
        path: '/',
        redirect: 'home'
    }
]
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import About from '../components/About/About'
import News from '../components/News/News.vue'
import NewsDet from '../components/News/NewsDet.vue'
import Product from '../components/Product/Product'
import ProductDet from '../components/Product/ProductDet'
import Commit from '../components/Service/Commit'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/dist/',
    routes: [
        { path: '/', redirect: '/index' },
        {
            path: '/index',
            component: Index
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/news',
            component: News,
        },
        {
            path: '/product',
            component: Product
        },
        { path: '/commit', component: Commit },
        { path: '/newsdet', component: NewsDet },
        { path: '/productdet', component: ProductDet }
    ]
})
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import MenuList from '../pages/MenuList.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import Cart from '../pages/Cart.vue'
import News from '../pages/News.vue'
import About from '../pages/About.vue'
import Coupons from '../pages/Coupons.vue'
import CouponDetail from '../pages/CouponDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/menu', name: 'MenuList', component: MenuList },
  { path: '/menu/:id', name: 'ProductDetail', component: ProductDetail, props: true },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/coupons', name: 'Coupons', component: Coupons },
  { path: '/coupons/:id', name: 'CouponDetail', component: CouponDetail, props: true },
  { path: '/news', name: 'News', component: News },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

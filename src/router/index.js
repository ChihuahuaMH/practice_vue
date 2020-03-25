import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'
import Menufunc from '@/components/Menufunc.vue'
import Loginform from '@/components/Loginform.vue'
import Kneejoint from '@/components/Kneejoint.vue'
import KneeEvaluation from '@/components/KneeEvaluation.vue'
import Search from '@/components/Search.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Menufunc',
        component: Menufunc,
        meta: {
            title: '首頁',
            requireAuth: true
        },
    },
    {
        path: '/knee_joint',
        component: Kneejoint,
        meta: {
            title: 'Knee Joint',
            requireAuth: true
        },
    },
    {
        path: '/knee_evaluation',
        component: KneeEvaluation,
        meta: {
            title: '膝關節評估搜尋',
            requireAuth: true
        },
    },
    {
        path: '/search',
        component: Search,
        meta: {
            title: '搜尋',
            requireAuth: true
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Loginform,
        meta: {
            title: '登入'
        },
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) { // 驗證是否需要登入
        if (store.state.login) { // 查詢本地儲存資訊是否已經登入
            next();
        } else {
            next({
                path: '/login', // 未登入則跳轉至login頁面
                query: {
                    redirect: to.fullPath
                } // 登入成功後回到當前頁面，這裡傳值給login頁面，to.fullPath為當前點選的頁面
            });
        }
    } else {
        next();
    }
});

export default router
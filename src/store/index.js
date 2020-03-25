import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'

import { apiUserLogin, apiGetUser, apiUserLogout } from "@/api/login.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        overlay: false,
        login: false || localStorage.getItem('login'),
        token: false || localStorage.getItem('token'),
        user: {
            name: '',
            email: '',
        }
    },
    computed: {
        token() {
            if (!state.token) {
                state.token = localStorage.getItem('token')
            }
        },
        login() {
            if (!state.login) {
                state.login = localStorage.getItem('login')
            }
        }
    },
    mutations: {
        setLogin(state) {
            state.login = localStorage.getItem('login', true)
        },
        setToken(state, restoken) {
            state.token = localStorage.getItem('token', restoken)
        },
        jumpPage() {
            router.push({
                path: `/`
            });
        },
        jumpToLogin() {
            router.push({
                path: `/login`,
            })
        },
        loading(state, overlay) {
            state.overlay = overlay
        }
    },
    actions: {
        // 使用者登入
        userLogin({ commit }, info) {
            commit("loading", true)
            apiUserLogin({
                    email: info.email,
                    password: info.password
                })
                .then(res => {
                    localStorage.setItem("login", true);
                    localStorage.setItem("token", res.data.token)
                    commit("setLogin")
                    commit("setToken")
                    commit("jumpPage")
                })
                .catch(err => {
                    alert('帳號或密碼錯誤，請再試一次')
                    console.log(err);
                });
        },

        // 取得使用者
        getUser({ state }) {
            apiGetUser({
                headers: {
                    'Authorization': `bearer ${state.token}`
                }
            }).then(res => {
                console.log(res)
                state.user = res.data.user
            }).catch(err => {
                console.log(err)
            })
        },

        // 登出
        logout({ state, commit }) {
            apiUserLogout({

            }).then(res => {
                state.token = ""
                state.login = false
                localStorage.removeItem('login')
                localStorage.removeItem('token')
                commit("jumpToLogin")
            }).catch(err => {
                console.log(err)
            })
        },

    },
    modules: {}
})
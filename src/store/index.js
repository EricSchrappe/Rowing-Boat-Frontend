import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// correspond to the data
const state = {
    token: undefined,
    isAdmin: false
}

const mutations = {
    ADD_TOKEN: (state, token) => state.token = token,
    ADD_IS_ADMIN: (state, isAdmin) => state.isAdmin = isAdmin
}

const getters = {
    getTokenFromStore: (state) => state.token,
    isAdmin: (state) => state.isAdmin
}

const actions = {
    pushToken: (store, token) => {
        store.commit('ADD_TOKEN', token);
    },
    pushIsAdmin: (store, isAdmin) => {
        store.commit('ADD_IS_ADMIN', isAdmin)
    }
}

const store =  new Vuex.Store({
    actions: actions,
    state: state,
    mutations: mutations,
    getters: getters,
    strict: true, // avoid modification into the store
    plugins: [createPersistedState({ storage: window.localStorages })],
});

export default store;
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    user: {},
    repositories: {},
    selectedRepo: undefined
}

const actions = {
    async loadUser({commit}) {
        const url = 'https://api.github.com/users/arkanjoms'
        const {data} = await axios.get(url)
        commit('setUser', data)
    },
    async loadRepositories({commit}) {
        const url = 'https://api.github.com/users/arkanjoms/repos?sort=updated&direction=desc'
        const {data} = await axios.get(url)
        commit('setRepositories', data)
    },
    selectRepo({commit}, repo) {
        commit('selectRepo', repo)
    }
}

const mutations = {
    setUser(state, data) {
        state.user = data
    },
    setRepositories(state, data) {
        state.repositories = data
    },
    selectRepo(state, repo) {
        state.selectedRepo = repo
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})

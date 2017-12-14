import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types'

Vue.use(Vuex)

const state = {
    user: {
        name: 'John',
        surname: 'Doe',
        email: 'jd@gmail.com'
    },
    posts: []
}

const getters = {
    getUser (state) {
        return state.user
    },
    getName (state) {
        return state.user.name + ' ' + state.user.surname
    },
    getPosts (state) {
        return state.posts
    },
    getPost (state, id) {
        return state.posts[id]
    }
}

const mutations = {
    [types.POST_INIT] (state, posts) {
        state.posts.push(...posts)
    },
    [types.POST_REMOVE] (state, id) {
        state.posts.splice(id, 1)
    }
}

const actions = {
    initPosts (context) {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
      }).then(
        response => response.json()
      ).then(
        json => context.commit('POST_INIT', json)
      )
    },
    removePost (context, id) {
        context.commit('POST_REMOVE', id)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
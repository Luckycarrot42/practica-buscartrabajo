import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [],
    job: undefined
  },
  mutations: {
    GET_JOBS(state, jobs){
      state.jobs = jobs
    }
  },
  actions: {
    getJobs({commit}){
      Axios.get('https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json')
      .then((response) => {
        commit('GET_JOBS', response.data)
      } )
    },
    getFilteredJobs({commit}, petition){
      Axios.get(`https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?${petition}`)
      .then((response) => {
        commit('GET_JOBS', response.data)
      })
    }
  },
  modules: {
  }
})

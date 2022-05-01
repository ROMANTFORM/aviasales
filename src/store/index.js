import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [],
    companies: [],
    segments: []
  },
  mutations: {
    SET_TICKETS: (state, tickets) => {
      state.tickets = tickets
    },
    SET_COMPANIES: (state, companies) => {
      state.companies = companies
    },
    SET_SEGMENTS: (state, segments) => {
      state.segments = segments
    }
  },
  actions: {
    GET_TICKETS({ commit }) {
      return axios('http://localhost:3000/tickets?_page=1&_limit=5', {
        method: "GET"
      })
        .then((tickets) => {
          commit('SET_TICKETS', tickets.data);
          return tickets;
        })
        .catch((err) => console.log(err))
    },

    GET_COMPANIES({ commit }) {
      return axios('http://localhost:3000/companies?_page=1&_limit=5', {
        method: "GET"
      })
        .then((companies) => {
          commit('SET_COMPANIES', companies.data);
          return companies;
        })
        .catch(err => console.log(err))
    },

    GET_SEGMENTS({ commit }) {
      return axios('http://localhost:3000/segments?_page=1&_limit=5', {
        method: "GET"
      })
        .then(segments => {
          commit('SET_SEGMENTS', segments.data);
          return segments;
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    TICKETS(state) {
      return state.tickets
    },
    COMPANIES(state) {
      return state.tickets
    },
    SEGMENTS(state) {
      return state.segments
    }
  }
})

import * as types from '@/store/mutation-types'
import api from '@/services/api/attributes'
import { handleError } from '@/utils/utils.js'
import axios from 'axios'
const getters = {
  attributes: state => state.attributes
}

const actions = {
  getattributes({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/attributes/all').then(res => {
        console.log(res)
      })
      // api
        // .getAllattributes()
        // .then(response => {
        //   console.log(response)
        //   if (response.status === 200) {
        //     const attributes = []
        //     const array = response.data
        //     array.forEach(element => {
        //       attributes.push(element.name)
        //     })
        //     commit(types.FILL_ALL_ATTRIBUTES, cities)
        //     resolve()
        //   }
        // })
        // .catch(error => {
        //   handleError(error, commit, reject)
        // })
    })
  }
}

const mutations = {
  [types.FILL_ALL_ATTRIBUTES](state, attributes) {
    state.attributes = attributes
  }
}

const state = {
  attributes: []
}

export default {
  state,
  getters,
  actions,
  mutations
}

import axios from 'axios'

export default {
  getAllAttributes() {
    return axios.get('/attributes/all')
  }
}

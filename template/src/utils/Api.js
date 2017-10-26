import axios from 'axios'

const opts = {
  baseURL: process.env.API_ROOT
}

export default axios.create(opts)

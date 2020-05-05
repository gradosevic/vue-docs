import axios from 'axios'

export const fetchNumber = ({commit}, {min, max}) => {
  axios.get('some-url?min=${min}&max=${max}').then((response) => {
    commit('addNumber', response.data.number)
  })
}

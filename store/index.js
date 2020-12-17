export const state = () => ({
  images: [],
  name: '',
})

export const mutations = {
  UPDATE_IMAGES(state, images) {
    state.images = images
  },
  UPDATE_NAME(state, name) {
    state.name = name
  },
}

export const actions = {
  updateImages({ commit }, images) {
    commit('UPDATE_IMAGES', images)
  },
  updateName({ commit }, name) {
    commit('UPDATE_NAME', name)
  },
}

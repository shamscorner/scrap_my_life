export const state = () => ({
  images: [],
})

export const mutations = {
  UPDATE_IMAGES(state, images) {
    state.images = images
  },
}

export const actions = {
  updateImages({ commit }, images) {
    commit('UPDATE_IMAGES', images)
  },
}

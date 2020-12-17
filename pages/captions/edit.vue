<template>
  <div>
    <h1 class="main-title">Scrap My Life</h1>
    <form class="edit-caption-form" @submit.prevent="submit">
      <div class="wrapper">
        <p
          class="text-sm"
          style="margin-bottom: 0px; padding-bottom: 0px; font-size: 22px"
        >
          Enter a name here
        </p>
        <input
          v-model="scrapbookName"
          type="text"
          placeholder="Enter a scrapbook name"
          style="width: 300px"
        />
      </div>
      <div v-for="(image, index) in images" :key="index" class="wrapper">
        <img :src="image.path" :alt="image.name" />
        <input
          type="text"
          placeholder="Give this image a meaning..."
          name="captions[]"
        />
      </div>
      <div class="wrapper">
        <button class="btn btn-submit">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'EditCaptions',

  data() {
    return {
      scrapbookName: '',
    }
  },

  computed: {
    ...mapState(['images']),
  },

  methods: {
    ...mapActions(['updateImages']),

    submit() {
      // get the captions
      const captions = []
      const input = document.getElementsByName('captions[]')
      for (let i = 0; i < input.length; i++) {
        captions.push(input[i].value.trim())
      }

      // update the images in store
      const images = []
      this.images.forEach((image, index) => {
        images.push({
          ...image,
          caption: captions[index],
        })
      })
      this.$store.dispatch('updateImages', images)

      // update the scrapbook name
      this.$store.dispatch('updateName', this.scrapbookName)

      // redirect
      this.$router.push({ name: 'scrapbook' })
    },
  },
}
</script>

<style lang="scss">
.edit-caption-form {
  display: flex;
  width: 100%;
  margin-top: 20px;
  flex-direction: column;

  .wrapper {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;

    input {
      width: 100%;
      margin-top: 15px;
      padding: 8px 10px;
      font-size: 18px;
    }
  }
}
</style>

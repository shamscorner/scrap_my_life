<template>
  <div>
    <h1 class="main-title">Scrap My Life</h1>
    <div
      id="my-strictly-unique-vue-upload-multiple-image"
      style="display: flex; justify-content: center"
    >
      <vue-upload-multiple-image
        id-upload="myIdUpload"
        drag-text="Drag, or"
        browse-text="Upload"
        primary-text="ScrapMyLife"
        popup-text="Preserve your precious memories in a very beautiful scrapbook, and share it with your close people around you"
        drop-text="Drop here to upload"
        accept="image/jpeg,image/png,image/jpg"
        edit-upload="myIdEdit"
        @upload-success="uploadImageSuccess"
        @before-remove="beforeRemove"
        @edit-image="editImage"
      ></vue-upload-multiple-image>
    </div>
    <p class="text-sm">You can upload maximum three images for now</p>
  </div>
</template>

<script>
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import { mapActions } from 'vuex'

export default {
  name: 'Home',

  components: {
    VueUploadMultipleImage,
  },

  methods: {
    ...mapActions(['updateImages']),

    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)

      // update images to store
      this.$store.dispatch('updateImages', fileList)

      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },

    beforeRemove(index, done, fileList) {
      console.log('index', index, fileList)
      const r = confirm('remove image')
      if (r === true) {
        done()
      } else {
      }
    },

    editImage(formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },
  },
}
</script>

<style>
#my-strictly-unique-vue-upload-multiple-image {
  font-family: 'Schoolbell', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#my-strictly-unique-vue-upload-multiple-image h1,
h2 {
  font-weight: normal;
}

#my-strictly-unique-vue-upload-multiple-image ul {
  list-style-type: none;
  padding: 0;
}

#my-strictly-unique-vue-upload-multiple-image li {
  display: inline-block;
  margin: 0 10px;
}

#my-strictly-unique-vue-upload-multiple-image a {
  color: #42b983;
}

#my-strictly-unique-vue-upload-multiple-image .image-container {
  width: 300px;
  height: 200px;
}
#my-strictly-unique-vue-upload-multiple-image .show-img {
  max-width: 280px;
  max-height: 200px;
}
</style>

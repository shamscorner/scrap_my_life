<template>
  <div>
    <h1 class="main-title">Scrap My Life</h1>

    <form action="" class="edit-caption-form" @submit.prevent="submit">
      <div class="wrapper">
        <img src="~/assets/images/image1.jpg" alt="" />
        <input type="text" placeholder="Give this image a meaning..." />
      </div>
      <div class="wrapper">
        <img src="~/assets/images/image2.jpg" alt="" />
        <input type="text" placeholder="Give this image a meaning..." />
      </div>
      <div class="wrapper">
        <img src="~/assets/images/image3.jpg" alt="" />
        <input type="text" placeholder="Give this image a meaning..." />
      </div>
      <div class="wrapper">
        <button class="btn-submit">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditCaptions',

  methods: {
    submit() {
      console.log('submitting...')
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

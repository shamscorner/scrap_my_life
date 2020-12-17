<template>
  <div id="scrapbook">
    <div v-if="!isCanvas" class="grid">
      <header>
        <h1>I Love My Awesome + Cute Cat</h1>
      </header>
      <figure class="fig fig--1">
        <img
          src="~/assets/images/image1.jpg"
          alt="Small child playing with toys"
        />
      </figure>
      <p>We played in my parent's house and they love him so much.</p>
      <figure class="fig fig--2">
        <img src="~/assets/images/image2.jpg" />
      </figure>
      <p>We had a great walk in park. Obviously, he had to prepare.</p>
      <figure class="fig fig--3">
        <img src="~/assets/images/image3.jpg" />
      </figure>
      <p>We watched a horror movie together.</p>
    </div>
    <div id="canvasContainer"></div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  name: 'Scrapbook',

  data() {
    return {
      isCanvas: false,
    }
  },

  async mounted() {
    try {
      const generatedCanvas = await html2canvas(
        document.querySelector('#scrapbook')
      )

      // show the canvas
      this.isCanvas = true

      // put the canvas
      document.querySelector('#canvasContainer').appendChild(generatedCanvas)
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<template>
  <div id="scrapbook">
    <div v-if="!isCanvas" class="grid">
      <header>
        <h1>I Love My Awesome + Cute Cat</h1>
      </header>

      <template v-for="(image, index) in images">
        <figure class="fig" :class="`fig--${index + 1}`">
          <img :src="image.path" :alt="image.caption" />
        </figure>
        <p>{{ image.caption }}</p>
      </template>
      <!-- <p>We played in my parent's house and they love him so much.</p> -->
      <!-- <p>We had a great walk in park. Obviously, he had to prepare.</p> -->
      <!-- <p>We watched a horror movie together.</p> -->
    </div>
    <div id="canvasContainer"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import html2canvas from 'html2canvas'

export default {
  name: 'Scrapbook',

  data() {
    return {
      isCanvas: false,
      isReady: false,
    }
  },

  computed: {
    ...mapState(['images']),
  },

  mounted() {
    setTimeout(() => {
      this.makeCanvas()
      this.isReady = true
    }, 5000)
  },

  methods: {
    async makeCanvas() {
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
  },
}
</script>

<template>
  <div id="scrapbook">
    <div v-if="isReady" class="dialog">
      <div class="ready-dialog">
        <h1 style="margin-bottom: 20px">Your scrapbook is ready :)</h1>

        <button
          class="btn btn-close"
          style="display: inline-block"
          @click="isReady = false"
        >
          Close
        </button>
        <button
          class="btn btn-action"
          style="display: inline-block"
          @click="makeAnotherOne()"
        >
          Make another one
        </button>
        <button class="btn btn-submit" style="display: inline-block">
          Download
        </button>
      </div>
    </div>
    <div v-if="!isCanvas" class="grid">
      <header>
        <h1>{{ name ? name : 'Your Scrape Life in a Book' }}</h1>
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
    ...mapState(['name', 'images']),
  },

  mounted() {
    setTimeout(() => {
      this.makeCanvas()
    }, 4000)
  },

  methods: {
    async makeCanvas() {
      try {
        const generatedCanvas = await html2canvas(
          document.querySelector('#scrapbook'),
          { width: 1200 }
        )
        // show the canvas
        this.isCanvas = true
        // put the canvas
        document.querySelector('#canvasContainer').appendChild(generatedCanvas)

        // show the ready dialog
        this.isReady = true
      } catch (error) {
        // console.log(error)
        alert('Oops! Something went wrong!')
      }
    },

    makeAnotherOne() {
      this.$router.push({ name: 'index' })
    },
  },
}
</script>

<style lang="scss">
// .dialog {
//   position: absolute;
//   min-width: 1280px;
//   height: 100vh;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: rgba(0, 0, 0, 0.6);
// }
.ready-dialog {
  position: absolute;
  top: 30%;
  left: 30px;
  right: 30px;
  width: 1140px;
  padding: 20px;
  text-align: center;
  background: white;
  box-shadow: 0px 0px 29px 16px rgba(102, 102, 102, 0.58);
  z-index: 100;

  .btn-submit {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
}

@media (min-width: 640px) {
  .ready-dialog {
    top: 30%;
    left: 10%;
    right: 10%;
    width: 80%;
  }
}
</style>

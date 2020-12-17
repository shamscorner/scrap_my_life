<template>
  <h1 class="main-title">
    <nuxt-link to="/" no-prefetch class="logo">Scrap My Life</nuxt-link>
  </h1>
</template>

<script>
export default {
  name: 'HeaderTitle',
}
</script>

<style lang="scss">
.main-title {
  font-size: 52px;
  text-align: center;
}
.main-title .logo {
  color: rgb(236, 72, 153);
  text-decoration: none;
}
.main-title .logo:hover {
  text-decoration: underline;
}
</style>

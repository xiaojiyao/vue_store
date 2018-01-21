<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './common/Header.vue'
  import Footer from './common/Footer.vue'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped>

</style>
<template>
  <div>
    <mainMenu></mainMenu>

    <router-view></router-view>
  </div>


</template>

<script>
  import eChartDemo from './eChartDemo.vue'
  import mainMenu from './mainMenu.vue'
  import flexPage from './flexPage.vue'
  import three from './three.vue'
  import webgldemo from './webgldemo.vue'
  export default {
    components: {
      mainMenu,
      eChartDemo,
      flexPage,
      webgldemo
    }

  }
</script>

<style scoped>

</style>
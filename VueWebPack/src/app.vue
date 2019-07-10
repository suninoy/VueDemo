<template>
  <div>
    <mainMenu></mainMenu>
    <todo class="todo"></todo>
  </div>


</template>

<script>
  import eChartDemo from './eChartDemo.vue'
  import mainMenu from './mainMenu.vue'
  import flexPage from './flexPage.vue'
  import todo from './todo.vue'
  export default {
    components: {
      mainMenu,
      eChartDemo,
      flexPage,
      todo
    }

  }
</script>

<style scoped>
 .todo{  
  width: 600px;
  margin: 0 auto ;
  box-shadow: 0 0 5px #666
 }
</style>
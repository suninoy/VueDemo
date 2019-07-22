<template>
    <todo class="todo"></todo>
</template>

<script>
  import todo from './todo.vue'
  export default {
    components: {
      todo
    }
    }

</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
   .todo{  
  width: 600px;
  margin: 0 auto ;
  box-shadow: 0 0 5px #666
 }
</style>
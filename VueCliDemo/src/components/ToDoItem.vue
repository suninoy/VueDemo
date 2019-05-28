<template>
<li class="item" @click="handelDelete">{{content}}</li>
</template>

<script>

  export default {
props:['content','index'],
methods:{
    handelDelete(){
       this.$emit('delete',this.index)
    }
}
  }

</script>

<style scoped>
/* scoped 作用域修饰符 只对当前组件有效；不加scoped 默认是全局样式 */
.item{
    color:green
}
</style>

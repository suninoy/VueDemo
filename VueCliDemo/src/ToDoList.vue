<template>
  <div id="app">
    <div>
      <input class="item" v-model="inputValue" />
      <button @click="handelSubmit">提交</button>
    </div>
    <ul>
      <todo-item v-for="(item,index) of list" :key="index" :content="item" :index="index" @delete="handelDelete">
      </todo-item>
    </ul>
  </div>
</template>

<script>
  import ToDoItem from './components/ToDoItem'
  export default {
    components: {
      'todo-item': ToDoItem
    },
    //vue-cli 组件数据应该是一个函数返回一个数据;而不是一个对象了
    //es6: function()  == ()
    data() {
      return {
        inputValue: '',
        list: []
      }
    },
    methods: {
      handelSubmit() {
        //this.list==this.$data.list的缩写
        this.list.push(this.inputValue);
        this.inputValue = "";
      },
      handelDelete(index){
        this.list.splice(index,1)
      }
    }
  }

</script>

<style>

</style>

<template>
    <section class="real-app">
        <input type="text" class="add-input" autofocus="autofocus" placeholder="what next to do?"
            @keyup.enter="addtodo">

        <Item v-for="todo in todos"
        :key="todo.id"/>
        <tabs :filter="filter"></tabs>
    </section>

</template>
<script>
    import Item from './item.vue'
    import Tabs from './tabs.vue'
    let id=0
    export default {
        data() {
            return {
                // todo: {
                //     id: 0,
                //     content: 'todo1',
                //     completed: false
                // },
                todos:[],
                filter: "all"
            }
        },
        components: {
            Item,
            Tabs
        },
        methods: {
            addtodo(e) {
this.todos.unshift({
    id:id++,
    content:e.target.value.trim(),
    completed:false
})
e.target.value = ''
            }
        }
    }
</script>

<style lang="stylus" scoped>
.rel-app
  width 600px
  margin 0 auto 
  box-shadow 0 0 5px #666
.add-input
  position relative
  width 100%
  font-size 24px
  font-family inherit 
  font-weight inherit 
  line-height 1.4em
  outline none 
  color inherit 
  padding 6px
  border 1px solid #999
  box-shadow inset 0 -1px 5px 0 rgba(0, 0, 0, .5)
  box-sizing border-box
  padding 16px 16px 16px 60px
</style>
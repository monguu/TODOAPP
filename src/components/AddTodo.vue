<template>
     <input
      v-model="todoText"
      type="text"
      class="w-100 p-3"
      placeholder="Type todo" 
      @keyup.enter="addTodo"
      ref="answer"
    />
</template>

<script>
export default {
     data() {
    return {
      todoText: "",
    }
     },
    methods:{
        addTodo(e) {
            this.$emit('add-todo', e.target.value);
        }
    }
}
</script>

<style scoped>

</style>

<template>
  <div id="App" class="container">
    <h1 class="text-center">TODO APP</h1>
   <CompletedTodo  />
    <AddTodo 
      @add-todo="addTodo"
    /> 
    <hr />
    <TodoList 
      @clicked-delete="deletetodo" 
      @toggle-checkbox="toggleCheckbox"
    />
  </div>
</template>

<script>
import CompletedTodo from '@/components/CompletedTodo.vue'
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'
export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
  },
  data() {
    return {
      todoText: "",
      // todos: [
      //   { id: 1, text: "play game", checked: false },
      //   { id: 2, text: "hello coding", checked: false },
      // ],
    };
  },
  methods: {
    addTodo(value) {
      this.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
      this.todoText = "";
    },
    toggleCheckbox({id, checked}) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },
    deletetodo(id) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos.splice(index, 1);
       console.log("hi")
    },
  },
};
</script>

<style>

.checkname {
  font-weight: bolder;
  font-size: 20px;

}
#App {
  font-family: 'Hammersmith One', sans-serif;
  font-family: 'Yeon Sung', cursive;
}

</style>

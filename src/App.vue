<template>
  <div id="App" class="container">
    <h1 class="text-center">TODO APP</h1>
    <input
      v-model="todoText"
      type="text"
      class="w-100 p-3"
      placeholder="Type todo"
      @keyup.enter="addTodo"
      ref="answer"
      @toggle-checkbox="toggleCheckbox"
    />
    <hr />
    <div class="checkname">
      <TodoApp v-for="todo 
      in todos" 
      :key="todo.id" 
      :todo="todo"
      @clicked-delete="deletetodo" 
    />
    </div>
  </div>
</template>

<script>
import TodoApp from "@/components/todo.vue";
export default {
  components: {
    TodoApp,
  },
  data() {
    return {
      todoText: "",
      todos: [
        { id: 1, text: "play game", checked: false },
        { id: 2, text: "hello coding", checked: false },
      ],
    };
  },
  methods: {
    addTodo(e) {
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
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

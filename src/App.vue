<template>
  <div id="App" class="container">
    <h1 class="text-center">ToDo App</h1>
    <input
      v-model="todoText"
      type="text"
      class="w-100 p-2"
      placeholder="Type todo"
      @keyup.enter="addTodo"
      ref="answer"
    />
    <div>
      <TodoApp v-for="todo in todos" :key="todo.id" :todo="todo" />
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
  },
};
</script>

<style>
</style>

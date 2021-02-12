<template>
  <div class="checkname">
    <TodoApp
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @clicked-delete="deletetodo"
      @toggle-checkbox="toggleCheckbox"
    />
  </div>
</template>
<script>
// import { mapState } from 'vuex';
import TodoApp from "@/components/todo.vue";
export default {
  components: {
    TodoApp,
  },
  computed: {
    // ...mapState(['todos']),
    todos() {
      return this.$store.state.Todo.todos;
    },
  },
  methods: {
    // ...mapActions([]),
    toggleCheckbox(value) {
      this.$emit("toggle-checkbox", value);
    },
    deletetodo(todoId) {
      this.$emit("clicked-delete", todoId);
    },
  },
};
</script>
<style scoped>
</style>
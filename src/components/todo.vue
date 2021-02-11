<template>
  <div class="mt-3 mb-2 d-flex">
    <div>
      <input type="checkbox" :checked="todo.checked" 
      @change="toggleCheckbox"/>
    </div>
    
    <span class="ml-3 p-1 flex-grow-1"
    :class="todo.checked ? 'text-muted' : ''"
    :style="todo.checked ? 'text-decoration: line-through':''"
    >
    {{ todo.text }}
     </span>
     <button 
      class="btn btn-danger btn-sm"
      @click="clickdelete"
     >Delete</button>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleCheckbox (e) {
      this.$emit('toggle-checkbox', {
        id: this.todo.id,
        checked:e.target.checked, 
      })
    },
    clickdelete () {
      this.$emit('clicked-delete',
        this.todo.id,
        console.log("hi")
      )
    }
  }
};
</script>
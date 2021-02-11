<template>
    <div>
        Completed Todo: {{ numberCompletedTodo }}
    </div>
</template>
<script>
export default {
    
    
    computed: {
        todos() {
            return this.$store.state.todos
        },
        numberCompletedTodo () {
            return this.todos.filter(todo => todo.checked).length; 
        },
        },
}
</script>

<style scoped>

</style>
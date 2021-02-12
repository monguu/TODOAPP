<template>
    <div>
        Completed Todo: {{ numberCompletedTodo }}
    </div>
</template>
<script>
export default {
    
    
    computed: {
        // todos() {
        //     return this.$store.state.todos
        // },
        numberCompletedTodo () {
            return this.$store.getters.numberCompletedTodo;
        },
        },
}
</script>

<style scoped>

</style>
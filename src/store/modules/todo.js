export default {
    state: {
        todos: [
            { id: 1, text: "create Text", checked: false },
            { id: 2, text: "working Todo", checked: false },
        ],
    },
    mutations: {
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false,
            });
            console.log("hi");
        },
        TOGGLE_TODO(state, { id, checked }) {
            const index = state.todos.findIndex((todo) => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoid) {
            const index = state.todos.findIndex((todo) => {
                return todo.id === todoid;
            });
            state.todos.splice(index, 1);
            console.log("hi");
        },
    },
    actions: {
        addTodo({ commit }, value) {
            setTimeout(() => {
                commit("ADD_TODO", value);
            }, 500);
            // commit("ADD_TODO", value);
        },
        toggleTodo({ commit }, { id, checked }) {
            commit("TOGGLE_TODO", { id, checked })
        },
    },
    getters: {
        numberCompletedTodo: (state) => {
            return state.todos.filter((todo) => todo.checked).length;
        },
    },
}


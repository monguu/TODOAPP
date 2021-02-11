import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "play game", checked: false },
      { id: 2, text: "hello coding", checked: false },
    ],
  },
  mutation: {},
  accept: {},
  getters: {},
});

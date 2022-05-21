import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
// root state object.
// each Vuex instance is just a single state tree.
const state = {
  loggedIn: false,
  user: "",
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  },
  setUser(state, value) {
    state.user = value;
  },
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  mutations,
  plugins: [createPersistedState()],
});

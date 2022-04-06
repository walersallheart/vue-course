import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter/index'

const store = createStore({
    modules: {
        numbers:counterModule
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations:  rootMutations,
    actions: rootActions, //actions can be asynchronous, mutations MUST be synchronous
    getters: rootGetters
});

export default store;
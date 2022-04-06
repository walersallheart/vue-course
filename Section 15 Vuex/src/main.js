import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations:  {
        increment(state) {
            console.group('increment mutation');
            console.log(state);
            console.groupEnd();

            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            console.group('increase mutation');
            console.log(state);
            console.log(payload);

            console.groupEnd();

            state.counter = state.counter + payload.value;
        }
    },
    actions: { //actions can be asynchronous, mutations MUST be synchronous
        increment(context) {
            console.group('increment action');
            console.log(context);
            console.groupEnd();

            setTimeout(function(){
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload) {
            console.group('increase action');
            console.log(context);
            console.log(payload);
            console.groupEnd();
            context.commit('increase', payload);
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(state, getters){
            const finalCounter = getters.finalCounter;

            if (finalCounter < 0) {
                return 0;
            }

            if (finalCounter > 100) {
                return 100;
            }

            return finalCounter;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');

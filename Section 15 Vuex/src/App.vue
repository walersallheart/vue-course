<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter />
    <favorite-value />
    <button @click="addTen">Add 10</button>
    <change-counter />
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from  './components/ChangeCounter.vue';
import FavoriteValue from'./components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  methods: {
    addTen() {
      this.$store.dispatch({
        type: 'increase',
        value: 10
      });
    }
  },
  computed: {
     isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
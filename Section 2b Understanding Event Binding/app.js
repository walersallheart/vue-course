const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods:{
    increment(num){
      this.counter += num;
    },
    decrement(num){
      this.counter -= num;
    }
  }
});

app.mount('#events');

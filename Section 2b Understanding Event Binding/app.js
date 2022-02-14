const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods:{
    increment(){
      this.counter++;
    },
    decrement(){
      this.counter--;
    }
  }
});

app.mount('#events');

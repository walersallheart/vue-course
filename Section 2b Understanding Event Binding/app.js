const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },
  methods:{
    submitForm(event){
      
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    increment(num){
      this.counter += num;
    },
    decrement(num){
      this.counter -= num;
    }
  }
});

app.mount('#events');

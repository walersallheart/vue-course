const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      lastName: '',
      confirmedName:'',
      fullName:''
    };
  },
  watch:{
    name(value){
      this.fullName = `${value} ${this.lastName}`;
    },
    lastName(value) {
      this.fullName = `${this.name} ${value}`;
    }
  },
  computed:{
    // fullName(){
    //   console.log('fullName');
    //   if (this.name === '') {
    //     return '';
    //   }

    //   return `${this.name} Wayne`;
    //}
  },
  methods:{
    outputFullName(){
      console.log('outputFullName');
      if (this.name === '') {
        return '';
      }

      return `${this.name} Wayne`;
    },
    submitForm(event){
      
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    setName(event, lastName){
      this.name = event.target.value;
    },
    increment(num){
      this.counter += num;
    },
    decrement(num){
      this.counter -= num;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');

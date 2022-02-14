const app = Vue.createApp({
    data(){
        return {
            courseGoal:'Finish the course and learn Vue',
            goals:[]
        }
    }
});

app.mount('#user-goal');
const app = Vue.createApp({
    data(){
        return {
            courseGoal:'Finish the course and learn Vue',
            vueLink:'https://vuejs.org',
            goals:[]
        }
    },
    methods:{
        outputGoal:() => {
            const randomNumber = Math.random();

            if (randomNumber < .5) {
                return 'Learn Vue!';
            }

            return 'Master Vue!';
        }
    }
});

app.mount('#user-goal');
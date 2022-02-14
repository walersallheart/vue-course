const app = Vue.createApp({
    data(){
        return {
            courseGoalA:'Finish the course and learn Vue',
            courseGoalB:'MAster Vue and build amazing apps!',
            vueLink:'https://vuejs.org',
            goals:[]
        }
    },
    methods:{
        outputGoal:function() {
            const randomNumber = Math.random();

            if (randomNumber < .5) {
                return this.courseGoalA;
            }

            return this.courseGoalB;
        }
    }
});

app.mount('#user-goal');
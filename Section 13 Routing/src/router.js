import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', redirect:'/teams' },
        {
            path:'/teams',
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                { path: ':teamId', component: TeamMembers, props: true },
            ] 
        },
        { 
            path:'/users',
            components:  {
                default: UsersList,
                footer: UsersFooter
            }, 
        },
        { path:'/:notFound(.*)', redirect:'/teams' }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) { //this will scroll the user back where they were if they go back
            return savedPosition;
        }

        console.log({to});
        console.log({from});
        console.log({savedPosition});

        return {
            left: 0, top: 0
        }
    }
});
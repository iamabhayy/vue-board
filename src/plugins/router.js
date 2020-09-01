import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Sample from '../views/admin/Sample';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/sample',
                    name: 'sample',
                    component: Sample
                },
            ]
        },
    ],
    mode: 'history'
});

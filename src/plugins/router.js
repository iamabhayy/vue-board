import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Login from '../views/Login';
import Dashboard from '../views/admin/Dashboard';

import DashboardPage from '../views/admin/dashboard/DashboardPage';
import CoursePage from '../views/admin/course/CoursePage';
import CreateCourse from '../views/admin/course/pages/Create';

import QuizPage from '../views/admin/quiz/QuizPage';
import StudentPage from '../views/admin/student/StudentPage';
import PaymentPage from '../views/admin/payment/PaymentPage';
import ChattingPage from '../views/admin/chatting/ChattingPage';
import AnounsmentPage from '../views/admin/anounsment/AnounsmentPage';

import AppSettingPage from '../views/admin/settings/AppSettingPage';
import Sample from '../views/admin/Sample';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/create/:step',
            name: 'course-create',
            component: CreateCourse
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Dashboard,
            children: [
                {
                    path: '/',
                    name: 'Dashboard',
                    component: DashboardPage
                },
                {
                    path: 'courses',
                    name: 'Course',
                    component: CoursePage,
                },
                {
                    path: 'quizes',
                    name: 'Quizes',
                    component: QuizPage
                },
                {
                    path: 'students',
                    name: 'Students',
                    component: StudentPage
                },
                {
                    path: 'payments',
                    name: 'Payments',
                    component: PaymentPage
                },
                {
                    path: 'chatting',
                    name: 'Chatting',
                    component: ChattingPage
                },
                {
                    path: 'anounsment',
                    name: 'Anounsment',
                    component: AnounsmentPage
                },
                {
                    path: 'app-settings',
                    name: 'AppSettings',
                    component: AppSettingPage
                },
                {
                    path: 'sample',
                    name: 'Sample',
                    component: Sample
                },
            ]
        },
    ],
    mode: 'history'
});

import Home from './components/Home.vue';
import Students from './components/others/Students.vue';
import Courses from './components/others/Courses.vue';
import Marks from './components/others/Marks.vue';

export const routes = [
	{path: '', component: Home},
	{path: '/student', component: Students},
	{path: '/course', component: Courses},
	{path: '/mark', component: Marks}
];
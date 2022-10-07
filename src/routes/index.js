import AuthView from '../views/auth/AuthView';
import Traprenovatie from '../views/Traprenovatie';



let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	{
		path: '/',
		component: Traprenovatie,
		layout: 'main',
	},
	

];
export default routes;
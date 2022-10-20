import AuthView from '../views/auth/AuthView';
import Traprenovatie from '../views/Traprenovatie';
import Traprenovatie2 from '../views/Traprenovatie2';
// import FormCard from '../../src/components/FormComponents/FormCard9';

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
	{
		path: '/page2',
		component: Traprenovatie2,
		layout: 'main',
	},
	// {
	// 	path: '/formCard9',
	// 	component: FormCard,
	// 	layout: 'main',
	// },
];
export default routes;

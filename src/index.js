import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
// import { store } from './store';
import './assets/sass/custom.scss';
// import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// @import "../../node_modules/bootstrap/scss/functions";

ReactDOM.render(
	// <Provider store={store}>
	
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	// </Provider>,
	document.getElementById('root')
);

import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import store from './store/store';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';

import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import Landing from './login/Landing';
import FeedPage from './feed/FeedPage';
import NotFound from './not-found/page';

const container = document.getElementById('root');

// Set up theme

//Initial render
ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme} >
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<Landing />} />
						<Route path="/" element={<FeedPage />} />
						<Route path="" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</ThemeProvider>
	</React.StrictMode>, container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { render } from 'react-dom';
import Redux,{createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import reducer from './reducers/index.jsx';
import App from './containers/index.jsx';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger())
};
const store = createStore(reducer,applyMiddleware(...middleware));

render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('editor')
)
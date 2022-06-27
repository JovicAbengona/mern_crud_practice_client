import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RateMovieForm from './components/RateMovieForm'
import ReviewsTable from './components/ReviewsTable';
import reducers from './reducers';
class App extends React.Component {
    render() {
		return <>
			<RateMovieForm />
			<hr />
			<ReviewsTable />
		</>
    };
};

ReactDOM.render(
    <Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
        <App />
    </Provider>, 
    document.querySelector('#root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RateMovieForm from './components/RateMovieForm'
import AddMovieForm from './components/AddMovieForm'
import reducers from './reducers';
class App extends React.Component {
    render() {
		return <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <NavLink to="/" className='navbar-brand text-success'><i className="fa-solid fa-clapperboard"></i></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/" activeClassName='active'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/movies" activeClassName='active'>Movies</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={<RateMovieForm />} />
                    <Route exact path="/movies" element={<AddMovieForm />} />
                </Routes>
            </BrowserRouter>
		</>
    };
};

ReactDOM.render(
    <Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
        <App />
    </Provider>, 
    document.querySelector('#root')
);
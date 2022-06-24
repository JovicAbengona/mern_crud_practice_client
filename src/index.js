import React from 'react';
import ReactDOM from 'react-dom';
import MoviesAPI from './api/Movies';
import RateMovieForm from './components/RateMovieForm'
import ReviewsTable from './components/ReviewsTable';
class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
			movies: null, 
			reviews: null, 
			form_value: {} 
		};
    }

	getMovies = async () => {
		let movies = await MoviesAPI.get('/api/get_movies');
		this.setState({movies: movies.data});
	}

	getReviews = async () => {
		let review_list = await MoviesAPI.get('/api/get_reviews');
		this.setState({reviews: review_list.data});
	}

	onFormChange = async (e) => {
		let form_value = this.state.form_value;

		form_value[e.target.name] = e.target.value;
		this.setState({form_value: form_value});
	}

	onFormSubmit = async (e) => {
		e.preventDefault();
		let submit_review = await MoviesAPI.post('/api/create_rating', {form_data: this.state.form_value});

		if(submit_review.request.status === 200){
			e.target.reset();
			await this.getReviews();
		}
	}

	componentDidMount = async () => {
        await this.getMovies();
        await this.getReviews();
    }

    render() {
		if(this.state.movies && this.state.reviews){
			return <>
				<RateMovieForm movies={this.state.movies} onChange={this.onFormChange} onSubmit={this.onFormSubmit} />
				<hr />
				<ReviewsTable reviews={this.state.reviews} />
			</>
		}
    };
};

ReactDOM.render(<App/>, document.querySelector("#root"));
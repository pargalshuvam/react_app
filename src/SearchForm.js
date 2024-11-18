import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: this.props.initialSearchQuery,
		};
	}

	handleChange = (event) => {
		this.setState({ query: event.target.value });
	};

	handleSearch = () => {
		this.props.onSearch(this.state.query);
	};


	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.handleSearch();
		}
	};

	render() {
		return (
			<center className="search-form">
				<input
					type="text"
					value={this.state.query}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
					placeholder="What do you want to watch?"
				/>
				<button onClick={this.handleSearch}>Search</button>
			</center>
		);
	}
}

export default SearchForm;

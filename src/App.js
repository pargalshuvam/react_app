import React, { Component } from 'react';
import Counter from './Counter';
import SearchForm from './SearchForm';
import GenreSelect from './Genres';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			selectedGenre: '',
			genreList: ['All', 'Action', 'Comedy', 'Drama', 'Romance', 'Sci-Fi'],  // List of genres
		};
	}

	handleSearch = (query) => {
		this.setState({ searchQuery: query });
	};

	handleSelectGenre = (genre) => {
		this.setState({ selectedGenre: genre });
	};

	render() {
		return (
			<center>
				<h1>Module 1</h1>
				<Counter initialValue={7} /><br />
				<SearchForm
					initialSearchQuery={this.state.searchQuery}
					onSearch={this.handleSearch}
				/>
				<GenreSelect
					genreList={this.state.genreList}
					selectedGenre={this.state.selectedGenre}
					onSelect={this.handleSelectGenre}
				/>
				<center>
					<h3>Search Query: {this.state.searchQuery}</h3>
					<h3>Selected Genre: {this.state.selectedGenre}</h3>
				</center>
			</center>
		);
	}
}

export default App;

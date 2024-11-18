import React, { Component } from 'react';
import './Genres.css';

class GenreSelect extends Component {

	constructor(props) {
		super(props);
		this.state = {
			genreList: this.props.genreList,
			selectedGenre: this.props.selectedGenre,
		};
	}

	handleGenreClick = (genre) => {
		this.props.onSelect(genre);
	};

	render() {

		return (
			<div className="genre-select">
				<h2>Genres</h2>
				<div className="genre-buttons">
					{this.state.genreList.map((genre) => (
						<button
							onClick={() => this.handleGenreClick(genre)}
						>
							{genre}
						</button>
					))}
				</div>
			</div>
		);
	}
}

export default GenreSelect;

import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { count: props.initialValue };
	}

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};

	decrement = () => {
		this.setState({ count: this.state.count - 1 });
	};

	render() {
		return React.createElement(
			'center',
			null,
			React.createElement('h3', null, `Count: ${this.state.count}`),
			React.createElement('button', { onClick: this.increment }, ' Increment + '),
			React.createElement('button', { onClick: this.decrement }, ' Decrement - ')
		);
	}
}

export default Counter;

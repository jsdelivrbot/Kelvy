 // import React and pull off the variable Component as Component
import React, { Component } from 'react';

// functional components are literally a function 
// Example:
// const SearchBar = () => {
// 	return <input />;
// };

// a class based component is used whenever you want a component to have some type of internal record keeping
// we will use ES6 to do this
class SearchBar extends Component {
	// all js functions have a constructor function - the first created whenever a new instance is created
	constructor(props) {
		// calling the parent method using super
		super(props);

		// manually change state
		this.state = { term: ''};
	}

	// must always define a render function and return a JSX
	render() {
		return (
			<div className="search-bar">
				<input
				placeholder="Search"
				// input is now a controlled component because the value only changes when state changes 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;

import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';

class JumbotronInstance extends Component {
	render() {
		return (
			<Jumbotron className="parallax">
				<h2 className="contrast">Welcome to KELVY</h2>
				<p className="contrast">The YouTube Add-Less Search Website</p>
			</Jumbotron>
		)
	}
}

export default JumbotronInstance;

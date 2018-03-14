import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Card from './Card';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = this.initState();
	}
	componentDidMount() {
		this.getRates();
	}
	initState() {
		return {
			rates: []
		};
	}
	getRates() {
		fetch('//localhost:3000/api/rates')
			.then(result => {
				return result.json();
			}).then(rates => {
				this.setState({rates});
				console.log('fetch data', rates);
			});
	}
	render() {
		return (
			<Container>
				<Row>
					{this.state.rates.map((rate, i) => <Card rate={rate} key={i} />)}
				</Row>
			</Container>
		);
	}
}
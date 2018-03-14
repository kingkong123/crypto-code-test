import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Card from './Card';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = this.initState();

		this.getRates = this.getRates.bind(this);
		this.autoUpdateChange = this.autoUpdateChange.bind(this);
	}
	componentDidMount() {
		this.interval = setInterval(this.getRates, 30000);

		this.getRates();
	}
	initState() {
		return {
			autoUpdate: true,
			rates: []
		};
	}

	autoUpdateChange(evt) {
		if(evt.target.checked){
			this.interval = setInterval(this.getRates, 30000);
		}else{
			clearInterval(this.interval);
		}

		this.setState({
			autoUpdate: evt.target.checked
		});
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
				<Row className="align-items-center">
					<Col sm="8" md="9"><h1>Cryptocurrency Realtime Price</h1></Col>
					<Col sm="4" md="3">
						<label>
							<input type="checkbox"
								checked={this.state.autoUpdate}
								onChange={this.autoUpdateChange} />
							Auto update
						</label>
					</Col>
				</Row>
				<Row>
					{this.state.rates.map((rate, i) => <Card rate={rate} key={i} />)}
				</Row>
			</Container>
		);
	}
}
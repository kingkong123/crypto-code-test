import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Card extends Component {
	render() {
		let ticker = this.props.rate.ticker;

		let name = '';

		switch(ticker.base){
			case 'BTC':
				name = 'Bitcoin';
				break;

			case 'ETH':
				name = 'Ether';
				break;

		}
		console.log(this.props);
		return (<Col sm="6" lg="4">
			<h1>{name}</h1>
			<div>${ticker.price}</div>
			<Row>
				<Col xs="6">
					volume: <br />
					{ticker.volume}
				</Col>
				<Col xs="6">
					change: <br />
					{ticker.change}
				</Col>
			</Row>
		</Col>);
	}
}
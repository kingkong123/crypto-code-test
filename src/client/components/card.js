import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Card extends Component {
	render() {
		let ticker = this.props.rate.ticker;

		if(ticker.base !== ''){
			let name = '';

			switch(ticker.base){
				case 'BTC':
					name = 'Bitcoin';
					break;

				case 'ETH':
					name = 'Ether';
					break;

			}

			let className = 'raise';

			if(ticker.change < 0){
				className = 'drop';
			}
			
			return (<Col sm="6" lg="4">
				<div className="card">
					<div className="card-body">
						<h1>{name}</h1>
						<div className="price">${ticker.price}</div>
						<Row>
							<Col xs="6">
								volume: <br />
								{ticker.volume}
							</Col>
							<Col xs="6">
								change: <br />
								<span className={className}>{ticker.change}</span>
							</Col>
						</Row>
					</div>
				</div>
			</Col>);
		}

		return ;
	}
}
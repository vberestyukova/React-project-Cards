import React from 'react';
import MaskedInput from 'react-maskedinput';

import Button from '../Button/Button';

import styles from './NewAccountForm.module.css';
import classNames from 'classnames';


export default class NewAccountForm extends React.Component<any, any> {
	constructor(props) {
		super(props);

		this.state = {
			cardNumber: '',
			month: '',
			year: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit = event => {
		this.setState({value: event.target.value});
	};

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Привязка банковской карты</h2>
				<div className={styles.cardForm}>
					<MaskedInput
						mask="1111 1111 1111 1111"
						name="cardNumber"
						value={this.state.cardNumber}
						onChange={this.handleInputChange}
						placeholder="Номер карты"
						className={styles.input}
					/>

					<div className={styles.label}>VALID THRU</div>
					<input
						value={this.state.month}
						className={classNames(styles.input, styles.inputDate)}
						placeholder="MM"
						name={"month"}
						onChange={this.handleInputChange}
					/>
					<input className={
						classNames(styles.input, styles.inputDate)}
						   value={this.state.year}
						   placeholder="YY"
						   name={"year"}
						   onChange={this.handleInputChange}
					/>
					<Button type="submit">Привязать</Button>

				</div>
			</form>
		);
	}
}

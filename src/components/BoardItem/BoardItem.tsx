import React from 'react';
import cn from 'classnames';
import Money from '../Money/Money';

import styles from './BoardItem.module.css';

const BoardItem: React.FC<any> = ({ type, title, customTitle, currency, amount }) => {


	return (
		<div className={styles.item}>
			<div className={cn(styles.logo, styles[`logo_${type}`])} />
			<div className={ customTitle ?? styles.title}>{ customTitle ?? title }</div>
			{type !== 'external' &&
			<Money value={amount}
				   currency={currency}
			/>}
		</div>
	)
};

export default BoardItem;

import React from 'react';

import BoardItem from '../BoardItem/BoardItem';

import styles from './Board.module.css';

// @ts-ignore
const Board: React.FC<any> = ({ accounts }) =>  {
    const sortedAccounts = accounts.map(x => x);
    const types = new Map([
        ['debit', 0],
        ['credit', 1],
        ['external', 3],
        ['saving', 4],
        ['loan', 5]
    ]);

    const currencies = new Map([
        ['RUB', 0],
        ['USD', 1],
        ['EUR', 2],
        ['GBP', 3]
    ]);


    sortedAccounts.sort(function(a, b) {
        // @ts-ignore
        return (types.get(a.type) - types.get(b.type) || currencies.get(a.currency) - currencies.get(b.currency))
    })


    if (accounts.length > 0) {
        return (
            <div className={styles.board}>

                {sortedAccounts.map(item =>(
                    <BoardItem type={item.type}
                               key={item.id}
                               currency={item.currency}
                               amount={item.amount}
                               title={item.title}
                    />
                ))}
            </div>
        )
    }

};

export default Board;



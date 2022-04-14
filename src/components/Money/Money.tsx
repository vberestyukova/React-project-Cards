import React from 'react';



const Money: React.FC<any> = (props) => {
    const intAndFractionalParts = String(props.value).split('.');
    const intPart = intAndFractionalParts[0];
    const fractionalPart = intAndFractionalParts[1];


    const currency = new Map();
    currency.set('RUB', '₽');
    currency.set('EUR', '€');
    currency.set('GBP', '£');
    currency.set('USD', '$');

        return (
            <span>
                <span>{intPart}</span>
                {fractionalPart !== undefined &&
                <span>,{fractionalPart}</span> }
                {props.currency !== undefined &&
                <span>{currency.get(props.currency)}</span>}
            </span>
        )

};

export default Money;

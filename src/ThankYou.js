import React from 'react';
import './App.css';

const ThankYou = props => {
    props.saveInputs();
    return (
        <div>
            <p>Dziękuję za wzięcie udziału w badaniu!</p>
        </div>
    )
}

export default ThankYou;
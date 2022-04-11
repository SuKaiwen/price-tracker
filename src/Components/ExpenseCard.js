import React from 'react';

function ExpenseCard(props) {

    const month = new Date().toLocaleString('en-US', {month: "long"});

    let totalExp = 7700.00;
    let earned = 5000;
    let saved = 2300;

    return (
        <div className = "expense_card__main">
            <p>Total Expenses for:</p>
            <h2>{month}</h2>
            <h1 className = "bold">${totalExp.toFixed(2)}</h1>
            <div className = "expense_card__grid">
                <p><span className = "tag1">Earned</span> ${earned}</p>
                <p><span className = "tag2">Saved</span> ${saved}</p>
            </div>
        </div>
    );
}

export default ExpenseCard;
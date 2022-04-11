import React from 'react';

function ExpenseMain(props) {
    return (
        <div>
            <h2>Top Spending</h2>
            <div className = "expense_main__spending_grid">
                <div className = "expense_main__spending_card">
                    <i class="fas fa-car"></i>
                    <p>Transport</p>
                </div>
                <div className = "expense_main__spending_card">
                    <i class="fas fa-hand-holding-medical"></i>
                    <p>Medical</p>
                </div>
                <div className = "expense_main__spending_card">
                    <i class="fas fa-building"></i>
                    <p>Office</p>
                </div>
                <div className = "expense_main__spending_card">
                    <i class="fas fa-utensils"></i>
                    <p>Food</p>
                </div>
            </div>
            <h2>Monthly Budget</h2>
        </div>
    );
}

export default ExpenseMain;
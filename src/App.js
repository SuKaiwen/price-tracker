import logo from './logo.svg';
import './App.css';
import './CSS/Global.css';
import './CSS/ExpenseCard.css';
import './CSS/ExpenseMain.css';

// Components
import ExpenseCard from './Components/ExpenseCard';
import ExpenseMain from './Components/ExpenseMain';

function App() {
  return (
    <div className="App">
      <div className = "banner">
        <div className = "banner-bar">
          <h1>Expense Tracker</h1>
          <p>Welcome, Guest!</p>
        </div>
      </div>
      <div className = "main-container">
        <h1>My Expenses</h1>
        <div className = "main-grid">
          <div>
            <h2>Total Expenses</h2>
            <ExpenseCard />
            <ExpenseMain />
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

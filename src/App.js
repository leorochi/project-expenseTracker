import Header from "./componentes/Header";
import './App.css';
import Balance from "./componentes/Balance";
import IncomeExpenses from "./componentes/IncomeExpenses";
import TransactionList from "./componentes/TransactionList";
import AddTransaction from "./componentes/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header/>
        <div className="container">
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div>
          </GlobalProvider>
        
    </div>
  );
}

export default App;

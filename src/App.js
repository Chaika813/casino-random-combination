import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './app/Header';
import TableContent from './app/TableContent';
import Footer from './app/Footer';

function App() {
  const [username, setUsername] = useState("Guest");
  const [balance, setBalance] = useState(10);
  const [rows, setRows] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    localStorage.setItem(`balance`, balance)
  }, [balance])

  const addUsername = (name) => {
    setUsername(name)
  }

  const updateBalance = (balance) => {
    setBalance(balance)
  }

  const updateRows = (rows) => {
    setRows(rows);
  }

  const checkAuth = (check) => {
    setAuth(check)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Header username={username} balance={balance} setUsername={addUsername} setBalance={updateBalance} setRows={updateRows} auth={auth} setAuth={checkAuth}/>
      </header>
      <main>
        <TableContent username={username} setUsername={addUsername} setBalance={updateBalance} rows={rows} setRows={updateRows} setAuth={checkAuth}/>
      </main>
      <footer >
      <Footer/>
      </footer>
    </div>
  );
}

export default App;

import * as api from './services/api';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './component/navigation/NavbarComp';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authUser = async () => {
    const isAuthenticated = await api.authenticate(username, password);
    setAuthenticated(isAuthenticated);
  };

  const createUser = async () => {
    await api.createUser(username, password);
  };

  return (
    <div className="App">
      {!authenticated ? (
        <div>
          <label>Username: </label>
          <br />
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <br />
          <label>Password: </label>
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <button onClick={createUser}>Create User</button>
          <button onClick={authUser}>Login</button>
        </div>
      ) : (
        <NavbarComp />
      )}
    </div>
  );
}

export default App;

import { createContext, useEffect, useState } from 'react';
import './App.css';
import AcceptNewPerson from './components/AcceptNewPerson';
import Chat from './components/Chat';
import FindPartner from './components/FindPartner';
import Login from './components/Login';
import MyProfile from './components/MyProfile';
import NavBar from './components/NavBar';
import RegisterForm from './components/RegisterForm';
import StrangerProfile from './components/StangerProfile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const AppContext = createContext();

function App() {

  const [appValues, setAppValues] = useState({
    fontSize: '16px',
    backgroundColor: '#f0f0f0',
    updateFontSize: (modifier) => {
      setAppValues((prevValues) => ({
        ...prevValues,
        fontSize: modifier(prevValues.fontSize),
      }));
    },
  });

  useEffect(()=>{
    console.log(appValues);
  },appValues)
  return (
    <AppContext.Provider value={appValues}>
      <div className="App">
        <NavBar />
        <Router>
          <div>
            <Routes>
              <Route path="/MyProfile" element={<MyProfile />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/FindPartner" element={<FindPartner />} />
              <Route path="/StrangerProfile" element={<StrangerProfile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/acceptNewPerson" element={<AcceptNewPerson />} />
              <Route path="/register" element={<RegisterForm />} />
            </Routes>
          </div>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;

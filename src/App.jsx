import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './components/Context';
import Main from './components/Main';
// import Exchange from './components/Exchange';
// import CurrencyConverter from './components/CurrencyConverter';
import Exchange from './components/Exchange';
import Coins from './components/Coins';
// import Header from './components/Header';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/main" element={<Main />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/coins" element={<Coins />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

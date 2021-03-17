import React from 'react';
import { GlobalStyle } from './styled/global';
import { Header } from './components/Header/index'
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;

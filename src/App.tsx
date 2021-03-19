import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styled/global';
import { Header } from './components/Header/index'
import { Dashboard } from './components/Dashboard';
import { NewTransactionsMOdal } from './components/NewTransactionsModal';


Modal.setAppElement('#root')

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionsMOdal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}

export default App;

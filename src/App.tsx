import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styled/global';
import { Header } from './components/Header/index'
import { Dashboard } from './components/Dashboard';
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()
        }
      ]
    })
  }
})

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
      <Modal
          onRequestClose={handleCloseNewTransactionModal}
          isOpen={isNewTransactionModalOpen}
        >
          <h2>Cadastrar transacao</h2>
        </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;

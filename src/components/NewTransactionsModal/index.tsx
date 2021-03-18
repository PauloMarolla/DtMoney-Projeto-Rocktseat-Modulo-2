import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionsMOdal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
  return (
    <Modal
    onRequestClose={onRequestClose}
    isOpen={isOpen}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button className="react-modal-close" type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal"/>
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Titulo"
          
        />

        <input 
          placeholder="Valor"
          type="number"
        />

        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </button>

          <button
            type="button"
          >
            <img src={outcomeImg} alt="saída"/>
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}
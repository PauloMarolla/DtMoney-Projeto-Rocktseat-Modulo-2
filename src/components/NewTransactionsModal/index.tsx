import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState, FormEvent } from 'react'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionsMOdal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {

    event.preventDefault();

    console.log({
      title,
      value,
      category,
      type
    })
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          placeholder="Valor"
          type="number"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}
import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransationModal } from './components/NewTransationModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

 

  function handleOpenNewTransationModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransationModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransationModal={handleOpenNewTransationModal} />

      <Dashboard />

      <NewTransationModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

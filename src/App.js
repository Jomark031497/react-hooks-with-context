import React from 'react';

import './App.css';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import CreateBook from './components/CreateBook';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <CreateBook />
      </BookContextProvider> 
    </div>
  );
}

export default App;

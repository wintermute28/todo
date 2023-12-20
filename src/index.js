import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  return (
    <>
    <AppHeader />
    <SearchPanel />
    <TodoList />
    </>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false},
    {label: 'Make Awesome App', important: true},
    {label: 'Have a lunch', important: false},
  ]

  return (
    <>
    <AppHeader />
    <SearchPanel />
    <TodoList todos={todoData} />
    </>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
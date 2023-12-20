import React from 'react';
import ReactDOM from 'react-dom/client';

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
  </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="Search" />;
};

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
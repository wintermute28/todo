import { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted,
            onToggleDone,
            onToggleImportant,
            done, important } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    };

    if (important) {
      classNames += ' important';
    }
  
    return (
      <span className={classNames}>
          <span
            className="todo-list-item-label"
            onClick={ onToggleDone }>
            {label}
          </span>
          <div>
              <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={ onToggleImportant }>
                  <i className="bi bi-exclamation-lg" />
              </button>
  
              <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={ onDeleted }>
                  <i className="bi bi-trash" />
              </button>
          </div>
      </span>
    );
  };
}
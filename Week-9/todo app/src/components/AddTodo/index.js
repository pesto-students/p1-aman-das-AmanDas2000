import React, { useState } from 'react';
import { MdAdd, MdDone, MdOutlineDelete } from 'react-icons/md';
import './style.css';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState(localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []);

  const generateId = () => {
    return parseInt(Math.random() * 100);
  };

  const addTodo = (content) => {
    if (content === '') {
      alert('Enter todo');
      return;
    }
    const newList = { id: generateId(), value: content, done: false };
    const str = JSON.stringify([...list, newList]);
    console.log(list);
    localStorage.setItem('list', str);
    setList((prev) => [...prev, newList]);
  };

  const doneTodo = (id) => {
    const reqd = list.map((e) => {
      if (e.id === id) {
        e.done = !e.done;
      }
      return e;
    });
    setList(reqd);
    localStorage.setItem('list', JSON.stringify(list));
  };

  const deleteTodo = (id) => {
    const reqd = list.filter((e) => e.id !== id);
    setList(reqd);
    localStorage.setItem('list', JSON.stringify(list));
  };

  return (
    <div>
      <div className="add">
        <form>
          <div className="input-container">
            <div>
              <input
                type="text"
                value={input}
                className="input"
                placeholder="Add todo"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="submit button-add"
                onClick={(e) => {
                  addTodo(input);
                  e.preventDefault();
                  setInput('');
                }}
              >
                <MdAdd />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {list?.map((item, i) => (
          <div className={item.done ? 'todo-done' : 'todo-notDone'}>
            <div className={item.done ? 'done' : 'notDone'}>
              {i + 1}. {item.value}
            </div>
            <div>
              <button className={item.done ? 'button-done' : 'button-notDone'} onClick={() => doneTodo(item.id)}>
                <MdDone />
              </button>
              <button className="button-del" onClick={() => deleteTodo(item.id)}>
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTodo;

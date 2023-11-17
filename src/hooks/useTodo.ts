import { useState } from 'react';

export const useTodo = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
    },
    {
      id: 2,
      text: '할일 2',
    },
    {
      id: 3,
      text: '할일 3',
    },
  ]);
  const createItem = () => {
    setTodos([...todos, { id: todos.length + 1, text: inputText }]);
    setInputText('');
  };

  const deleteItem = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return {
    todos,
    inputText,
    setTodos,
    setInputText,
    createItem,
    deleteItem,
  };
};

import { useTodoStore } from '../store';

export const useTodo = () => {
  const inputText = useTodoStore((state) => state.inputText);
  const todos = useTodoStore((state) => state.todos);

  const getTodos = (type: string) => {
    return todos.filter((todo) => todo.type === type);
  };
  const moveTodo = useTodoStore((state) => state.moveTodo);
  const draggedTodo = useTodoStore((state) => state.draggedTodo);
  const setDraggedTodo = useTodoStore((state) => state.setDraggedTodo);

  const setInputText = useTodoStore((state) => state.setInputText);
  const createTodo = useTodoStore((state) => state.createTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  return {
    todos,
    inputText,
    draggedTodo,
    moveTodo,
    setInputText,
    setDraggedTodo,
    getTodos,
    createTodo,
    deleteTodo,
  };
};

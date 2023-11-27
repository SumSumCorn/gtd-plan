import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';
export type Todo = {
  id: string;
  text: string;
  type: string;
};

interface TodoState {
  todos: Todo[];
  inputText: string;
  draggedTodo: null | Todo;
  setDraggedTodo: (todo: Todo | null) => void;
  setInputText: (input: string) => void;
  createTodo: () => void;
  deleteTodo: (index: string) => void;
  moveTodo: (type: string) => void;
}

export const useTodoStore = create<TodoState>()((set) => ({
  todos: [],
  inputText: '',
  draggedTodo: null,
  setDraggedTodo: (todo) =>
    set((state) => ({
      draggedTodo: todo,
    })),
  setInputText: (input) => set((state) => ({ inputText: input })),
  createTodo: () =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: uuidv4(), text: state.inputText, type: 'today' },
      ],
      inputText: '',
    })),
  deleteTodo: (index) =>
    set((state) => {
      const newTodos = state.todos.filter((todo) => todo.id !== index);
      return {
        todos: newTodos,
        inputText: '',
      };
    }),
  moveTodo: (type) =>
    set((state) => ({
      todos: state.todos.map(
        (todo) =>
          todo.id === state.draggedTodo?.id ? { ...todo, type: type } : todo
        // todo.id === state.draggedTodo.id ? {} : todo
      ),
    })),
}));

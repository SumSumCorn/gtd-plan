import ApiCalendar from 'react-google-calendar-api';
import { v4 as uuidv4 } from 'uuid';

const config = {
  clientId:
    '1087832733466-7cgnlfguva9ktbnjag194tqpe694roq4.apps.googleusercontent.com',
  apiKey: 'AIzaSyBkhDe_XeqyicBUhBMG7KwO0iakwKmsIao',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};

export const apiCalendar = new ApiCalendar(config);

type Todo = {
  id: string;
  star: number;
  completed: boolean;
};

const todos: Todo[] = Array(10).map((el) => {
  return {
    id: uuidv4(),
    star: Math.floor(Math.random() * 6),
    completed: false,
  };
});

export const fetchTodos = async (query: number): Promise<Todo[]> => {
  const filteredTodo = todos.filter((todo) => todo.star === query);
  return [...filteredTodo];
};

export const addTodo = async (todo: Pick<Todo, 'star'>): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newTodo = {
    id: uuidv4(),
    star: Math.floor(Math.random() * 6),
    completed: false,
  };

  todos.push(newTodo);

  return newTodo;
};

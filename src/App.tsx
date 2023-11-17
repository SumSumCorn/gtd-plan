import { useEffect, useState } from 'react';
import './App.css';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import TodoTemplate from './components/TodoTemplate';
import TodoLists from './components/TodoLists';
function App() {
  const [answer, setAnswer] = useState('');
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
  useEffect(() => {
    const chatModel = new ChatOpenAI({
      openAIApiKey: import.meta.env['VITE_OPENAI_API_KEY'],
    });
  }, []);

  const generateJoke = async () => {
    const chatModel = new ChatOpenAI({
      openAIApiKey: import.meta.env['VITE_OPENAI_API_KEY'],
    });
    const chatResult = await chatModel.predict(
      'Say something funny jokes. Speak in Korean.'
    );

    setAnswer(chatResult);
  };

  return (
    <div>
      <TodoTemplate>
        <TodoLists todos={todos} />
      </TodoTemplate>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import TodoTemplate from './components/TodoTemplate';
import TodoListItem from './components/TodoList';
function App() {
  const [answer, setAnswer] = useState('');
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
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </TodoTemplate>
    </div>
  );
}

export default App;

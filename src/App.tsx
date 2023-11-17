import './App.css';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import TodoContainer from './components/TodoContainer';
import { useState, useEffect } from 'react';
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
      <TodoContainer />
    </div>
  );
}

export default App;

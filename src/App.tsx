import { ChatOpenAI } from 'langchain/chat_models/openai';
import { useState, useEffect } from 'react';
import Nav from './components/nav';
import { app } from './app.css';
import { Outlet } from 'react-router-dom';

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
    <div className={app}>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;

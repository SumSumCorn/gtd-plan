import { useEffect, useState } from 'react';
import './App.css';
import { OpenAI } from 'langchain/llms/openai';
import { ChatOpenAI } from 'langchain/chat_models/openai';
function App() {
  const [answer, setAnswer] = useState('');
  useEffect(() => {}, []);

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
      <div>test</div>
      <button onClick={generateJoke}>click me!</button>
      <div>{answer}</div>
    </div>
  );
}

export default App;

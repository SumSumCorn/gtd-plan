import { useState, ChangeEvent } from 'react';
import { modal, modalBackdrop, text } from './modal.css';

export default function Modal({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [inputText, setInputText] = useState('\nasdfsaf\n\nasdfasf\nasfd\n');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const blob = new Blob([inputText], { type: 'text/markdown' });
  const dataUrl = URL.createObjectURL(blob);

  return (
    <div className={modalBackdrop}>
      <div className={modal}>
        <div>
          <textarea
            className={text}
            rows={10}
            cols={33}
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <a href={dataUrl} download='text.md'>
            <button>저장하기</button>
          </a>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

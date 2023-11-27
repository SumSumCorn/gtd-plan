import { CiCircleCheck } from 'react-icons/ci';
import { SiObsidian } from 'react-icons/si';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import {
  itemContent,
  itemType,
  itemWrapper,
  itemText,
  iconButton,
} from './step3.css';
import { useTodo } from '../hooks/useTodo';
import Modal from '../components/modal';

export default function Project() {
  const { todos } = useTodo();
  const [todayTodos, setTodayTodos] = useState(todos);
  const [enabled, setEnabled] = useState(false);
  const [modal, setModal] = useState(false);

  const onDragEnd = ({ source, destination }: DropResult) => {
    // console.log('>>> source', source);
    // console.log('>>> destination', destination);
    if (!destination) return;

    // 깊은 복사
    const _items = JSON.parse(JSON.stringify(todayTodos)) as typeof todayTodos;
    // 기존 아이템 뽑아내기
    const [targetItem] = _items.splice(source.index, 1);
    // 기존 아이템을 새로운 위치에 삽입하기
    _items.splice(destination.index, 0, targetItem);
    // 상태 변경

    setTodayTodos(_items);
  };

  useEffect(() => {}, [todayTodos]);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todayTodos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className={itemWrapper}>
                        <div className={itemContent}>
                          <div className={itemType}>{todo.type}</div>
                          <div className={itemText}>{todo.text}</div>
                        </div>
                        <div
                          className={iconButton}
                          onClick={() => {
                            setModal(true);
                          }}
                        >
                          <SiObsidian size={30} />
                        </div>
                        <div className={iconButton}>
                          <CiCircleCheck size={30} />
                        </div>
                        {/* <div className={dragIcon} draggable>
                            <RxHamburgerMenu size={24} />
                          </div> */}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {modal ? <Modal setModal={setModal} /> : <></>}
    </div>
  );
}

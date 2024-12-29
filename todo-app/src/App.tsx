import React, { useCallback, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

type TypeTodo = {
  id: number;
  text: string;
  checked: boolean;
};

type TypeAction =
  | { type: 'INSERT'; todo: TypeTodo }
  | { type: 'REMOVE'; id: number }
  | { type: 'TOGGLE'; id: number };

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos: TypeTodo[], action: TypeAction) {
  switch (action.type) {
    case 'INSERT':
      // {type: 'INSERT', todo: {id:1, text:'todo', checked: false}}
      return todos.concat(action.todo);
    case 'REMOVE':
      // {type: 'REMOVE', id: 1}
      return todos.filter(todo => todo.id !== action.id)
    case 'TOGGLE':
      // {type: 'TOGGLE', id: 1}
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App = () => {
  // state
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트의 기초 알아보기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일링 해보기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false,
  //   },
  // ])
  // const [todos, setTodos] = useState(createBulkTodos);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  // const nextId = useRef(2501);

  // description : useState의 함수형 업데이트
  // const onInsert = useCallback(
  //   (text: string) => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     setTodos(todos => todos.concat(todo));
  //     nextId.current += 1;
  //   }, [todos]
  // )

  // const onRemove = useCallback(
  //   (id: number) => {
  //     setTodos(todos => todos.filter(todo => todo.id !== id));
  //   }, []
  // )

  // const onToggle = useCallback(
  //   (id: number) => {
  //     setTodos(
  //       todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
  //     )
  //   }, [todos]
  // )

  // description : useReducer 사용
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback((text: string) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id: number) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE', id });
  }, [])


  // render
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;

import React, { FormEvent, useCallback, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { produce } from 'immer';

interface Info {
  id: number;
  name: string;
  username: string;
}

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState<{
    array: Info[];
    uselessValue: null;
  }>({
    array: [],
    uselessValue: null
  });
  // input 수정을 위한 함수
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setForm(
        produce(draft => {
          draft[name as keyof typeof form] = value;
        })
      );
    },
    [form]
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // array에 새 항목 등록
      setData(
        produce(draft => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  const onRemove = useCallback(
    (id: number) => {
      setData(
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1)
        })
      );
    },
    [data]
  )

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='username'
          placeholder='아이디'
          value={form.username}
          onChange={onChange}
        />
        <input
          name='name'
          placeholder='이름'
          value={form.name}
          onChange={onChange}
        />
        <button type='submit'>등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import { useCallback, useState, ChangeEvent, FormEvent } from 'react';
import '../styles/TodoInsert.scss';
import { MdAdd } from 'react-icons/md'

interface TodoInsertProps {
    onInsert: (text: string) => void;
}

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            onInsert(value);
            setValue('');

            // submit 이벤트는 브라우저에서 새로고침을 발생하기 때문에 이를 방지하기 위해 작성
            e.preventDefault();
        }, [onInsert, value],
    )

    //render
    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력하세요'
                value={value}
                onChange={onChange}
            />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;
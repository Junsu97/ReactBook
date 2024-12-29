import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import '../styles/TodoListItem.scss';
import { Todo } from '../types/interface/todo-interface';
import React from 'react';

interface TodoListItemProps {
    todo: Todo;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;

}

// component
const TodoListItem = ({ todo, onRemove, onToggle }: TodoListItemProps) => {
    const { id, text, checked } = todo;
    //render
    return (

        <div className='TodoListItem'>
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>

    )
}

export default React.memo(TodoListItem);
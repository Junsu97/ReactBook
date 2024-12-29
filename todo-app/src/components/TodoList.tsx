import React, { useCallback } from 'react';
import '../styles/TodoList.scss';
import { TodoListProps } from '../types/interface/todo-list-interface';
import TodoListItem from './TodoListItem';
import { FixedSizeList } from 'react-window';


const TodoList = ({ todos, onRemove, onToggle }: TodoListProps) => {
    // function
    const rowRender = ({ index, style }: { index: number; style: React.CSSProperties }) => {
        const todo = todos[index];
        return (
            <div style={style} key={todo.id}>
                <TodoListItem
                    todo={todo}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            </div>
        );
    };

    //render
    return (
        <FixedSizeList
            height={513}
            itemCount={todos.length}
            itemSize={57}
            width={512}
        >
            {rowRender}
        </FixedSizeList>
    )
}

export default React.memo(TodoList);
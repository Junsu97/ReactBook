import '../styles/TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    //render
    return (
        <div className='TodoList'>
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    )
}

export default TodoList;
import '../styles/TodoList.scss';
import { TodoListProps } from '../types/interface/todo-list-interface';
import TodoListItem from './TodoListItem';



const TodoList = ({ todos, onRemove, onToggle }: TodoListProps) => {
    //render
    return (
        <div className='TodoList'>
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default TodoList;
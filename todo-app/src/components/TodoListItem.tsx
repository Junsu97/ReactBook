import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import '../styles/TodoListItem.scss';

const TodoListItem = () => {
    //render
    return (
        <div className='TodoListItem'>
            <div className='checkbox'>
                <MdCheckBoxOutlineBlank />
                <div className='text'>할 일</div>
            </div>
            <div className='remove'>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem;
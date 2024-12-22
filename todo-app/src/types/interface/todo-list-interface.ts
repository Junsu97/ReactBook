import { Todo } from "./todo-interface";

export interface TodoListProps {
    todos: Todo[];
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}
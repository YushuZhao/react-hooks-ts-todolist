export interface IToDoItem {
    id: number;
    content: string;
    completed: boolean;
}

export interface IToDoList {
    todoList: IToDoItem[];
}

export interface IAction {
    type: ACTION_TYPE,
    payload: IToDoItem | IToDoItem[] | number
}

export enum ACTION_TYPE {
    ADD_TODO = 'addTodo',
    REMOVE_TODO = 'removeTodo',
    TOGGLE_TODO = 'toggleTodo',
    INIT_TODOLIST = 'initialList'
}
import React, { FC, ReactElement, useCallback, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import AddToDo from './AddToDo';
import { todoReducer } from './reducer';
import { IToDoItem, IToDoList, ACTION_TYPE } from './typings';

const Title = styled.div`
    color: #000;
    font-size:18px;
`;

function init(initTodoList: IToDoItem[]): IToDoList {
    return {
        todoList: initTodoList
    }
}

const ToDoListComponent: FC = (): ReactElement => {
    const [state, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        const todoList: IToDoItem[] = JSON.parse(localStorage.getItem('todolist') || '[]');
        dispatch({
            type: ACTION_TYPE.INIT_TODOLIST,
            payload: todoList
        })
    }, []);

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(state.todoList));
        console.log(localStorage.getItem('todolist'))
    }, [state.todoList])

    const addTodo = useCallback((todo: IToDoItem): void => {
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    }, []);

    return (
        <div className='todolist'>
            <Title>todolist</Title>
            <AddToDo
                addToDo={addTodo}
                todoList={state.todoList}
            />
        </div>
    );
}

export default ToDoListComponent;

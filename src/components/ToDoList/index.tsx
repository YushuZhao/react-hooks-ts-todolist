import React, { FC, ReactElement, useCallback, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import AddToDo from './AddToDo';
import TdList from './List';
import { todoReducer } from './reducer';
import { IToDoItem, IToDoList, ACTION_TYPE } from './typings';

const Title = styled.div`
    color: #000;
    font-size: 18px;
    text-align: center;
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

    const toggleTodo = useCallback((id: number): void => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_TODO,
            payload: id
        })
    }, []);

    const removeTodo = useCallback((id: number): void => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload: id
        })
    }, []);

    return (
        <div className='todolist'>
            <Title>ToDoList</Title>
            <AddToDo
                addToDo={addTodo}
                todoList={state.todoList}
            />
            <TdList
                todoList={state.todoList}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
            />
        </div>
    );
}

export default ToDoListComponent;

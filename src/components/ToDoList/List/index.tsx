import React, { FC, ReactElement } from 'react';
import { IToDoItem } from '../typings';
import TdItem from './Item';
import styled from 'styled-components';

interface IProps {
    todoList: IToDoItem[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const ViewBox = styled.div`
    border: solid 1px #000;
    border-radius: 5px;
    width: 320px;
`

const TdList: FC<IProps> = ({ todoList, toggleTodo, removeTodo }): ReactElement => {
    return (
        <ViewBox className="todo-list">
            {
                todoList && todoList.map((todo: IToDoItem) => {
                    return (
                        <TdItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                        />
                    )
                })
            }
        </ViewBox>
    );
}

export default TdList;

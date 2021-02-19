import React, { FC, ReactElement } from 'react';
import { IToDoItem } from '../typings';
import TdItem from './Item';
import styled from 'styled-components';

interface IProps {
    todoList: IToDoItem[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

interface IPropsDivStyle {
    borderColor?: string;
}

const ViewBox = styled.div<IPropsDivStyle>`
    border:  solid 1px ${props => props.borderColor};
    border-radius: 5px;
    width: 320px;
`

const TdList: FC<IProps> = ({ todoList, toggleTodo, removeTodo }): ReactElement => {
    return (
        <ViewBox className="todo-list" borderColor={todoList.length ? '#000' : '#fff'}>
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

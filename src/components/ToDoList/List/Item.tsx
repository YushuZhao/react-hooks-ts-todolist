import React, { FC, ReactElement } from 'react';
import { IToDoItem } from '../typings';
import { Button } from '../../../styles/common';
import styled from 'styled-components';

interface IProps {
    todo: IToDoItem;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const Item = styled.div`
    width: 202px;
    padding: 5px;
    display: inline-block;
`;

const TdItem: FC<IProps> = ({ todo, toggleTodo, removeTodo }): ReactElement => {
    const { id, content, completed } = todo;

    return (
        <div className="todo-item">
            <Item>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggleTodo(id)}
                />
                <span
                    style={{ textDecoration: completed ? 'line-through' : 'none' }}
                >{content}</span>
            </Item>
            <Button
                onClick={() => removeTodo(id)}
            >删除</Button>
        </div>
    );
}

export default TdItem;

import React, { useRef, FC, ReactElement } from 'react';
import styled from 'styled-components';
import { IToDoItem } from '../typings'
import { Button } from '../../../styles/common';

interface IPropsInputStyle {
    inputColor?: string;
}

const Input = styled.input<IPropsInputStyle>`
    width: 200px;
    padding: 5px;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid#ccc;
    color: ${props => props.inputColor || "lightpink"};
`;

interface IPropsAddToDo {
    addToDo: (todo: IToDoItem) => void;
    todoList: IToDoItem[];
}

const TdAdd: FC<IPropsAddToDo> = ({ addToDo, todoList }): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);

    const addItem = (): void => {
        const val: string = inputRef.current!.value.trim(); // !: 断言inputRef.current存在
        if (val.length) {
            const isExist = todoList.find(todo => todo.content === val);

            if (isExist) {
                alert('已存在！');
                return;
            }

            addToDo({
                id: new Date().getTime(),
                content: val,
                completed: false
            });
            inputRef.current!.value = '';
        }
    }


    return (
        <div className="todo-input">
            <Input type="text" placeholder="添加todo" ref={inputRef} inputColor="rebeccapurple" />
            <Button onClick={addItem}>添加</Button>
        </div>
    )
}

export default TdAdd;
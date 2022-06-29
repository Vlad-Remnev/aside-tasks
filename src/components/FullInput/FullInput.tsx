import React, {ChangeEvent, FC, useState} from 'react';

interface IFullInput {
    addMessage: (title: string) => void
}

export const FullInput: FC<IFullInput> = ({addMessage}) => {
    const [title, setTitle] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
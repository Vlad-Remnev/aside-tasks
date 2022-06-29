import React, {ChangeEvent, FC} from 'react';

interface IInput {
    title: string
    setTitle: (value: string) => void
}

export const Input:FC<IInput> = ({title, setTitle}) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <input value={title} onChange={onChangeInputHandler}/>
    );
};

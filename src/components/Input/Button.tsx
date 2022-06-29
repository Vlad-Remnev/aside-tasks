import React, {FC} from 'react';

interface IButton {
    name: string
    callBack: () => void
}

export const Button:FC<IButton> = ({name, callBack}) => {
    const  onClickButtonHandler = () => {
        callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};
import React, {FC} from 'react';

interface IButton {
    name: string
    callBack:() => void
}

const Button:FC<IButton> = ({name, callBack}) => {
    const onClickHandler = () => {
        {callBack()}
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};

export default Button;
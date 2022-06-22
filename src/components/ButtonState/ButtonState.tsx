import React, {useState} from 'react';

const ButtonState = () => {
    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }
    const onClickZero = () => {
        setA(a = 0);
        console.log(a)
    }
    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Increment</button>
            <button onClick={onClickZero}>To ZERO</button>
        </>
    );
};

export default ButtonState;
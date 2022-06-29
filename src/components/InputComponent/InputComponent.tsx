import React, {FC, useState} from 'react';
import s from './InputComponent.module.css'
import {Button} from "../Input/Button";
import {Input} from "../Input/Input";
// import {FullInput} from "../FullInput/FullInput";

export const InputComponent = () => {

    const [message, setMessage] = useState([
        {message: 'Privet'},
        {message: 'Pokachto'},
        {message: 'Ne znaiu'},
    ])

    const [title, setTitle] = useState('');

    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
            <div className={s.container}>
                {/*<FullInput addMessage={addMessage}/>*/}
                <Input title={title} setTitle={setTitle}/>
                <Button name={'+'} callBack={callBackButtonHandler}/>
                {message.map((item, index) => {
                    return (
                        <div key={index}>{item.message}</div>
                    )
                })}
            </div>
    );
};
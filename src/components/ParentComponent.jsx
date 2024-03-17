import React from 'react';
import { useState } from 'react';
import ChildComponent from './ChildComponent';
import SiblingComponent from './SiblingComponent';

const ParentComponent = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const reset = () => {
        setCounter(0);
    };

    const random = () => {
        const newValue = Math.floor(Math.random() * 10 + 1);
        setCounter(newValue);
    };

    const decrement = () => {
        setCounter(counter > 0 ? counter - 1 : 0);
    };

    return (
        <div>
            <h4>Счетчик: {counter}</h4>
            <button onClick={increment}>Увеличить</button>
            <button onClick={reset}>Сбросить</button>
            <button onClick={random}>Случайное значение</button>
            <button onClick={decrement}>Уменьшить</button>

            <ChildComponent name={'Маша'} counter={counter} />

            <SiblingComponent />
        </div>
    );
};

export default ParentComponent;

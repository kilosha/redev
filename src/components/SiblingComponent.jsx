import React from 'react';
import { useState } from 'react';

const SiblingComponent = () => {
    const [text, setText] = useState('Help me');

    const handleClick = () => {
        setText('REDEV');
    };

    return (
        <div>
            <p>Текущий текст: {text}</p>
            <button onClick={handleClick}>Изменить текст</button>
        </div>
    );
};

export default SiblingComponent;

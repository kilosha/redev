import { useState } from 'react';

const Input = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div>
            <input value={inputText} onChange={handleInputChange} />
            <p>Введённый текст: {inputText}</p>
        </div>
    );
};

export default Input;

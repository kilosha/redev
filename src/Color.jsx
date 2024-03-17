import { useState } from 'react';

const Color = () => {
    const [color, setColor] = useState('yellow');

    const setNewColor = () => {
        switch (color) {
            case 'yellow':
                setColor('green');
                break;
            case 'green':
                setColor('red');
                break;
            case 'red':
                setColor('yellow');
                break;
            default:
                setColor('yellow');
        }
    };

    return (
        <div>
            <button onClick={setNewColor}>New color</button>
            <p style={{ color: color }}>Цветной текст</p>
        </div>
    );
};

export default Color;

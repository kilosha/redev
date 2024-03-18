const { useState } = require('react');

const ButtonComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count) => count + 1);
    };

    return (
        <div>
            <p>Текущее значение: {count}</p>
            <button onClick={increment}>Нажми меня</button>
        </div>
    );
};

export default ButtonComponent;

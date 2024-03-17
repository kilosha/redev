import React from 'react';

const ChildComponent = ({ name, counter }) => {
    return (
        <div>
            <p>
                Привет, {name}! Текущий счетчик: {counter}
            </p>
        </div>
    );
};

export default ChildComponent;

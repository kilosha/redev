const { useState } = require('react');

const TextToggle = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleText = () => setIsVisible(!isVisible);

    return (
        <div>
            <button onClick={toggleText}>Show/hide text</button>

            {isVisible && <p>Текст</p>}
        </div>
    );
};

export default TextToggle;

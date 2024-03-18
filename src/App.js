import { useState } from "react";
import LifecycleComponentClass from "./components/LifecycleComponentClass";
import LifecycleComponent from "./components/LifecycleComponent";

function App() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => setIsVisible(isVisible => !isVisible);

    return (
        <div className="App">
            <button onClick={handleClick}>"Демонтировать"/вмонтировать компоненты</button>
            <h3>Классовый компонент:</h3>
            {isVisible && <LifecycleComponentClass />}

            <h3>Функциональный компонент:</h3>
            {isVisible && <LifecycleComponent />}

        </div>
    );
}

export default App;

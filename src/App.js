import ButtonComponent from './ButtonComponent';
import TextToggle from './TextToggle';
import Input from './Input';
import Color from './Color';
import ClassComponent from './ClassComponent';

function App() {
    return (
        <div className="App">
            <h1>Функциональные компоненты:</h1>
            <ButtonComponent />
            <TextToggle />
            <Input />
            <Color />

            <h1>Классовый компонент:</h1>
            <ClassComponent />
        </div>
    );
}

export default App;

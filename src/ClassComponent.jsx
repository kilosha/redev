import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, color: 'red', inputText: '', isVisible: false };
    }

    changeCount = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    };

    changeVisibility = () => {
        this.setState((state) => ({ isVisible: !state.isVisible }));
    };

    handleInputChange = (e) => {
        this.setState({ inputText: e.target.value });
    };

    setNewColor = () => {
        const newColor = this.state.color === 'red' ? 'yellow' : 'red';
        this.setState({ color: newColor });
    };

    render() {
        const { count, isVisible, inputText, color } = this.state;

        return (
            <div>
                <div>
                    <h5>Раздел с кнопкой, текущее значение: {count}</h5>
                    <button onClick={this.changeCount}>Нажми меня</button>
                </div>
                <div>
                    <h5>Раздел со скрываемым текстом</h5>
                    <button onClick={this.changeVisibility}>Скрыть/показать текст</button>
                    {isVisible && <p>Текст</p>}
                </div>
                <div>
                    <h5>Раздел с инпутом</h5>
                    <input value={inputText} onChange={this.handleInputChange} />
                    <p>Введённый текст: {inputText}</p>
                </div>
                <div>
                    <h5>Раздел с цветом</h5>
                    <button onClick={this.setNewColor}>New color</button>
                    <p style={{ color }}>Цветной текст</p>
                </div>
            </div>
        );
    }
}

export default ClassComponent;

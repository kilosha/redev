import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import ClassComponent from "./ClassComponent";
import ClassComponent2 from "./ClassComponent2";


function App() {
    const object = {
        name: "Sasha",
        age: 28
    }

    const array = [1, 4, 2, 5];

    const subSecondComponent = () => <h4>SubSecondComponent</h4>;

    return (
        <div className="App">
            <h2>Функциональные компоненты:</h2>

            <FirstComponent numberProps={5} name={"Masha"} isOnline={true} />
            <SecondComponent subSecondComponent={subSecondComponent} />
            <ThirdComponent obj={object} arr={array} />

            <h2>Классовые компоненты:</h2>

            <ClassComponent numberProps={5} name={"Masha"} isOnline={true} />
            <ClassComponent2 obj={object} arr={array} subSecondComponent={subSecondComponent} />
        </div>
    );
}

export default App;

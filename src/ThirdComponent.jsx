const ThirdComponent = ({ obj, arr }) => {
    return (
        <div>
            <p>
                {obj.name}, {obj.age} лет
            </p>
            <div>{arr}</div>
            {arr && arr.map((item) => <div key={item}>Элемент массива: {item}</div>)}
        </div>
    );
};

export default ThirdComponent;

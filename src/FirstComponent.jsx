const FirstComponent = ({ numberProps, name, isOnline }) => {
    return (
        <div>
            <div>Число: {numberProps}</div>
            <span>{name}</span>
            {isOnline && <span> В сети </span>}
        </div>
    );
};

export default FirstComponent;

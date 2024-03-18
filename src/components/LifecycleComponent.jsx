import React, { useEffect, useState, useMemo } from 'react';

const LifecycleComponent = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);

    const handleClick = () => setCount((count) => count + 1);

    useEffect(() => {
        console.log('componentDidMount'); // empty array of dependencies
        fetch('https://todo-redev.herokuapp.com/api/users?gender=female')
            .then((response) => response.json())
            .then((users) => setUsers(users.slice(0, 10)));
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate'); // вызывается когда обновляются users
    }, [users]);

    useEffect(() => {
        console.log(`Текущий functional count: ${count}`); // вызывается когда обновляeтся count
    }, [count]);

    useEffect(() => {
        return () => console.log('componentWillUnmount');
    }, []); // empty array & return

    console.log('Render main');

    return (
        <div>
            <button onClick={handleClick}>Увеличить count</button>
            <SubComponent count={count} users={users} />
        </div>
    );
};

const SubComponent = React.memo(
    ({ count, users }) => {
        console.log('Render subComponent');
        return (
            <div>
                <p>Текущее значение count: {count}</p>
                {users && users.map((user) => <div key={user.id}>{user.username}</div>)}
            </div>
        );
    },
    (prevProps, nextProps) => {
        //ререндер только при чётном count (в идеале проверяет equal ли props, if false - rerender)
        return nextProps.count % 2;
    },
);

export default LifecycleComponent;

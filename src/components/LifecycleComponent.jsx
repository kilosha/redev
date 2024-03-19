import { useEffect, useState, memo } from 'react';

const LifecycleComponent = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);

    const fetchData = async () => {
        try {
            const response = await fetch(
                process.env.REACT_APP_BACKEND_URL + '/users?gender=female',
            );
            const data = await response.json();

            if (!Array.isArray(data)) {
                throw new Error(data.errors[0].msg);
            }

            setUsers(data.slice(0, 10));
        } catch (e) {
            console.log(e);
        }
    };

    const handleClick = () => setCount((count) => count + 1);

    useEffect(() => {
        console.log('componentDidMount'); // empty array of dependencies
        fetchData();
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate'); // вызывается когда обновляются users и когда им сетается начальное значение в useState
    }, [users]);

    useEffect(() => {
        console.log(`Текущий functional count: ${count}`); // вызывается когда обновляeтся count и когда им сетается начальное значение в useState
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

const SubComponent = memo(
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

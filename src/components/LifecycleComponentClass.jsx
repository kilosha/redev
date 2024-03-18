import React from 'react';

class LifecycleComponentClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [], count: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://todo-redev.herokuapp.com/api/users?gender=male')
            .then((response) => response.json())
            .then((users) => this.setState({ users: users.slice(0, 10) }));
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        console.log(`Текущий count: ${this.state.count}`);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(nextState.count % 2);
    }

    handleClick() {
        this.setState((state) => ({
            count: state.count + 1,
        }));
    }

    render() {
        const { count, users } = this.state;

        console.log('render');

        return (
            <div>
                <p>Текущее значение count: {count}</p>
                <button onClick={this.handleClick}>Увеличить count</button>
                {users && users.map((user) => <div key={user.id}>{user.username}</div>)}
            </div>
        );
    }
}

export default LifecycleComponentClass;

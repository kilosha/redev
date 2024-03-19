const List = ({ users, handleUpdateBtnClick }) => {
    return (
        <ul style={{ margin: '20px' }}>
            {users &&
                users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button
                            style={{ marginLeft: '10px' }}
                            onClick={() => handleUpdateBtnClick(user.id)}>
                            Update user
                        </button>
                    </li>
                ))}
        </ul>
    );
};

export default List;

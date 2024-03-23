import styles from './List.module.css';

const List = ({ users, handleUpdateBtnClick, theme }) => {
    return (
        <ul className={theme === 'dark' && styles.dark}>
            {users &&
                users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button
                            className={theme === 'dark' && styles.dark}
                            onClick={() => handleUpdateBtnClick(user.id)}>
                            Update user
                        </button>
                    </li>
                ))}
        </ul>
    );
};

export default List;

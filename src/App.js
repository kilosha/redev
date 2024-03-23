import { useState, useRef, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import List from "./components/List";
import { ThemeContext, themes } from "./contexts/ThemeContext";


function App() {
    const [newUserName, setNewUserName] = useState("");
    const [users, setUsers] = useState([
        { name: "Masha", id: "ea6abbd7-eb68-4ee0-b352-23721c84c1f2" },
        { name: "Vlad", id: "0b480ff3-64bd-42d3-9318-f728cc1d62dd" },
        { name: "Pasha", id: " bae6bb59-5c22-42f5-8f4c-1fc8d9877a5d" },
        { name: "Oskar", id: "e7f723f0-867c-4184-bdbf-7774faea5ec5" }
    ]);

    const textInput = useRef(null);

    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = (e) => {
        setNewUserName(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (newUserName.trim().length && e.key === "Enter") {
            setUsers(users => [...users, { name: newUserName.trim(), id: uuidv4() }]);
            setNewUserName("");
        }
    }

    const handleClick = () => {
        textInput.current.focus();
    }

    const handleUpdateBtnClick = (id) => {
        setUsers(users => users.map(user =>
            user.id === id ? { ...user, name: `!!!${user.name}` } : user
        ));
    }

    const changeTheme = () => {
        setTheme(theme => theme === themes.light ? themes.dark : themes.light);
    }

    return (
        <div>
            <input className={theme === 'dark' && "dark"} ref={textInput} value={newUserName} onChange={handleChange} onKeyDown={handleKeyDown} />
            <button className={theme === 'dark' && "dark"} onClick={handleClick}>Фокус</button>

            <List users={users} handleUpdateBtnClick={handleUpdateBtnClick} theme={theme} />

            <button className={theme === 'dark' && "dark"} onClick={changeTheme}>Change theme</button>
        </div>
    );
}

export default App;

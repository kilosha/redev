import React from 'react';
import { useNavigate } from 'react-router-dom';

const DontExistPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>DontExistPage</h2>

            <button onClick={() => navigate('/')}>Вернуться на главную страницу</button>
        </div>
    );
};

export default DontExistPage;

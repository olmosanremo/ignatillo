import React from 'react';
import './FabButton.css'; // Import the CSS file for styling

const FabButton = ({ onClick }) => {
    return (
        <button className="fab-btn" onClick={onClick}>
            <span className='material-symbols-outlined'>add</span>
        </button>
    );
};

export default FabButton;

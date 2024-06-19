import React from 'react';
import FabButton from './components/FabButton'; // Import the FabButton component

const Header = () => {
    const handleFabClick = () => {
        alert('FAB clicked!');
    };

    return (
        <header>
            <div className="controls">
                <h1>
                    <button className="gusti">Ignatillo</button>
                </h1>

                <div className="littleControls">
                    <button>Play/pause</button>
                    <button>Stop</button>
                    <button>Save Project</button>
                    <button>Write/erase</button>
                </div>
            </div>
            <div className="colorPatches">
                <button>color1</button>
                <button>color2</button>
                <button>color3</button>
                <button>color4</button>
                <button>color5</button>
                <button>color6</button>
                {/* Replace the old FAB with the new FabButton component */}
                <FabButton onClick={handleFabClick} />
            </div>
        </header>
    );
};

export default Header;

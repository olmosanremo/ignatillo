import React, { useEffect, useRef } from 'react';
import './TrackContainer.css'; // Import the CSS file for styling

const TrackContainer = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        // Example drawing on the canvas
        context.fillStyle = 'lightblue';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }, []);

    return (
        <div className="trackContainer">
            <div className="trackAndField">
                <div className="trackControls">
                    <button>Scale</button>
                    <button>Save Project</button>
                </div>
                <div className="canvasContainer">
                    <canvas ref={canvasRef}></canvas>
                </div>
            </div>
        </div>
    );
};

export default TrackContainer;

import React from 'react';

const Hero = ({handleLogout}) => {
    return (
        <div >
            <div>
            <div align="center">
                <h1> WellCome To our Website</h1>
                
            </div>
            </div>
            <br>
            </br><br></br>
            <button onClick={handleLogout}>Logout</button>
        </div>
        
    );
};
export default Hero;
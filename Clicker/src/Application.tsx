import React from 'react';
import Clicker from './features/clicker/Clicker';
import DisplayValue from './features/game/DisplayValue';
import Market from './features/market/Market';

const Application = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <DisplayValue />
                </div>
                <div>
                    <Clicker />
                </div>
                <div>
                    <Market />
                </div>
            </div>
        </>
    );
};

export default Application;

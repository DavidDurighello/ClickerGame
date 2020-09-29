import React from 'react';
import Incrementor from './components/Incrementor';
import StyledMultiplicator from './components/Multiplicator';
import Upgrades from './components/Upgrades';

const Market = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <StyledMultiplicator />
                <Upgrades />
                <Incrementor />
            </div>
        </>
    );
};

export default Market;

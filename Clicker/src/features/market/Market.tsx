import React from 'react';
import Incrementor from './components/Incrementor';
import Upgrades from './components/Upgrades';

const Market = (): React.ReactElement => {
    return (
        <>
            <Upgrades />
            <Incrementor />
        </>
    );
};

export default Market;

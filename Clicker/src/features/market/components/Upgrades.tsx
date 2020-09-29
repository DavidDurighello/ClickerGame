import React from 'react';
import { useRecoilState } from 'recoil';
import ClickerAtom from '../../../atoms/ClickerAtom';
import IncrementorClickAtom from '../../../atoms/upgrades/IncrementorClickAtom';

export const Upgrades = (): React.ReactElement => {
    const [clickerValue, clickerValueSetter] = useRecoilState(ClickerAtom);
    const [incrementorClickValue, incrementorClickValueSetter] = useRecoilState(IncrementorClickAtom);

    const handleClickAdd1IncrementorClick = () => {
        if (clickerValue >= 5) {
            clickerValueSetter((value) => value - 5);
            incrementorClickValueSetter((value) => value + 1);
        }
    };

    return (
        <>
            <button type="button" onClick={handleClickAdd1IncrementorClick}>
                + 1 par click ({incrementorClickValue})
            </button>
        </>
    );
};

export default Upgrades;

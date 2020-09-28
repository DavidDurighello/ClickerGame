import React from 'react';
import { useRecoilState } from "recoil";
import ClickerAtom from "../../atoms/ClickerAtom";
import Add1BySecondAtom from '../../atoms/Add1BySecondAtom';

const Market = () =>
{
    const [clickerValue, clickerValueSetter] = useRecoilState(ClickerAtom);
    const [add1BySecondValue, add1BySecondValueSetter] = useRecoilState(Add1BySecondAtom);

    const handleClickAdd1BySecond = () =>
    {
        if (clickerValue >= 5)
        {
            clickerValueSetter((value) => value - 5);
            add1BySecondValueSetter((value) => value + 1);
        }
    };

    return <>
        <button type="button" onClick={handleClickAdd1BySecond}>+ 1 par seconde ({add1BySecondValue})</button>
    </>;
}

export default Market;
import React from "react";
import { useRecoilState } from "recoil";
import Add1BySecondAtom from "../../../atoms/Add1BySecondAtom";
import ClickerAtom from "../../../atoms/ClickerAtom";

const Incrementor = () => 
{
    const [clickerValue, clickerValueSetter] = useRecoilState(ClickerAtom);
    const [add1BySecondValue, add1BySecondValueSetter] = useRecoilState(Add1BySecondAtom);


    const handleClickAdd1BySecond = () =>
    {
        if (clickerValue >= 10)
        {
            clickerValueSetter((value) => value - 10);
            add1BySecondValueSetter((value) => value + 1);
        }
    };
    
    return (<>
        <button type="button" onClick={handleClickAdd1BySecond}>+ 1 par seconde ({add1BySecondValue})</button>
    </>);
}

export default Incrementor;
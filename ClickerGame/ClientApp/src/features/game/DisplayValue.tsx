import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Add1BySecondAtom from "../../atoms/Add1BySecondAtom";
import ClickerAtom from "../../atoms/ClickerAtom";
import useInterval from "../../hooks/useInterval";

const DisplayValue = () =>
{
    const [clickerValue, clickerValueSetter] = useRecoilState(ClickerAtom);
    const add1BySecondValue = useRecoilValue(Add1BySecondAtom);

    useInterval(() =>
    {
        clickerValueSetter(clickerValue + add1BySecondValue);
    }, 1000);

    return (<>
        <p>{clickerValue}</p>
    </>);
};

export default DisplayValue;
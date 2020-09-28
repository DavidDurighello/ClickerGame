import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ClickerAtom from "../../atoms/ClickerAtom";
import IncrementorClickAtom from "../../atoms/upgrades/IncrementorClickAtom";

const Clicker = () =>
{
    const incrementer = useSetRecoilState(ClickerAtom);
    const incrementorClickValue = useRecoilValue(IncrementorClickAtom);

    const handleClick = (e: React.SyntheticEvent) =>
    {
        e.preventDefault();
        incrementer((value) => value + incrementorClickValue);
    };

    return (<>
        <button type="button" onClick={handleClick}>
            Click ici
        </button>
    </>);
}

export default Clicker;
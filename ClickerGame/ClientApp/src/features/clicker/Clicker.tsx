import React from "react";
import { useSetRecoilState } from "recoil";
import ClickerAtom from "../../atoms/ClickerAtom";

const Clicker = () =>
{
    const incrementer = useSetRecoilState(ClickerAtom);

    const handleClick = (e: React.SyntheticEvent) =>
    {
        e.preventDefault();
        incrementer((value) => value + 1);
    };

    return (<>
        <button type="button" onClick={handleClick}>
            Click ici
        </button>
    </>);
}

export default Clicker;
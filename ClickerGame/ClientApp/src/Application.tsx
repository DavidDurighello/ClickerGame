import React from "react";
import Clicker from './features/clicker/Clicker';
import DisplayValue from "./features/game/DisplayValue";
import Market from "./features/market/Market";

const Application = () =>
{
    return (<>
        <DisplayValue />
        <Clicker />
        <Market />
    </>);
};

export default Application;
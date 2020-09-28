import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import ClickerAtom from "../../atoms/ClickerAtom";

const DisplayValue = () =>
{
    const value = useRecoilValue(ClickerAtom);
 
    useEffect(()=>{
        
    })
    
    return (<>
        <p>{value}</p>
        </>
    );
};

export default DisplayValue;
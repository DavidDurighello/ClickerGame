import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import styled from 'styled-components';
import Add1BySecondAtom from '../../atoms/Add1BySecondAtom';
import ClickerAtom from '../../atoms/ClickerAtom';
import useInterval from '../../hooks/useInterval';

type DisplayValueProps = { className?: string };

const DisplayValue = ({ className }: DisplayValueProps) => {
    const [clickerValue, clickerValueSetter] = useRecoilState(ClickerAtom);
    const add1BySecondValue = useRecoilValue(Add1BySecondAtom);

    useInterval(() => {
        clickerValueSetter(clickerValue + add1BySecondValue);
    }, 1000);

    return <input type="text" className={className} disabled={true} value={clickerValue} />;
};

const StyledDisplayValue = styled(DisplayValue)`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export default StyledDisplayValue;

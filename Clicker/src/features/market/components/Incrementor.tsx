import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Add1BySecondAtom from '../../../atoms/Add1BySecondAtom';
import ClickerAtom from '../../../atoms/ClickerAtom';
import MultiplicatorAtom from '../../../atoms/MultiplicatorAtom';

type IncrementorProps = { className?: string };

const Incrementor = ({ className }: IncrementorProps) => {
    const baseCost = 10;

    const [clickerValue, clickerValueSetter] = useRecoilState(ClickerAtom);
    const [add1BySecondValue, add1BySecondValueSetter] = useRecoilState(Add1BySecondAtom);
    const multiplicator = useRecoilValue(MultiplicatorAtom);

    const cost = multiplicator * baseCost;

    const handleClickAdd1BySecond = () => {
        if (clickerValue >= cost) {
            clickerValueSetter((value) => value - cost);
            add1BySecondValueSetter((value) => value + multiplicator);
        }
    };

    return (
        <button className={className} type="button" onClick={handleClickAdd1BySecond}>
            + {multiplicator} par seconde ({add1BySecondValue}) [Prix: {cost}]
        </button>
    );
};

const StyledIncrementor = styled(Incrementor)`
    box-shadow: 3px 4px 0px 0px #8a2a21;
    background: linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
    background-color: #c62d1f;
    border-radius: 18px;
    border: 1px solid #d02718;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 17px;
    padding: 7px 25px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #810e05;
`;

export default StyledIncrementor;

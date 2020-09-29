import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import ClickerAtom from '../../../atoms/ClickerAtom';
import MultiplicatorAtom from '../../../atoms/MultiplicatorAtom';
import IncrementorClickAtom from '../../../atoms/upgrades/IncrementorClickAtom';

type UpgradesProps = { className?: string };

const Upgrades = ({ className }: UpgradesProps) => {
    const baseCost = 5;

    const [clickerValue, clickerValueSetter] = useRecoilState(ClickerAtom);
    const [incrementorClickValue, incrementorClickValueSetter] = useRecoilState(IncrementorClickAtom);
    const multiplicator = useRecoilValue(MultiplicatorAtom);

    const cost = multiplicator * baseCost;

    const handleClickAdd1IncrementorClick = () => {
        if (clickerValue >= cost) {
            clickerValueSetter((value) => value - cost);
            incrementorClickValueSetter((value) => value + multiplicator);
        }
    };

    return (
        <button className={className} type="button" onClick={handleClickAdd1IncrementorClick}>
            + {multiplicator} par click ({incrementorClickValue}) [Prix: {cost}]
        </button>
    );
};

const StyledUpgrades = styled(Upgrades)`
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

export default StyledUpgrades;

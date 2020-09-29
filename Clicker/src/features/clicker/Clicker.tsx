import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import ClickerAtom from '../../atoms/ClickerAtom';
import IncrementorClickAtom from '../../atoms/upgrades/IncrementorClickAtom';

type ClickerProps = {
    className?: string;
};

const Clicker = ({ className }: ClickerProps): React.ReactElement => {
    const incrementer = useSetRecoilState(ClickerAtom);
    const incrementorClickValue = useRecoilValue(IncrementorClickAtom);

    const handleClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        incrementer((value) => value + incrementorClickValue);
    };

    return (
        <button className={className} type="button" onClick={handleClick}>
            Click ici
        </button>
    );
};

const StyledClicker = styled(Clicker)`
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

export default StyledClicker;

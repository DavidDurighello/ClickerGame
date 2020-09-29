import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import MultiplicatorAtom from '../../../atoms/MultiplicatorAtom';

type MultiplicatorProps = { className?: string };

const Multiplicator = ({ className }: MultiplicatorProps) => {
    const values = [1, 10, 100, 1000];

    const [multiplicator, setMultiplicator] = useRecoilState(MultiplicatorAtom);

    const nextValue = (): number => {
        const index = values.findIndex((value) => value === multiplicator);
        const nextIndex = index + 1;

        if (nextIndex >= values.length) {
            return values[0];
        }

        return values[nextIndex];
    };

    const handleChangeMultiplicator = () => {
        setMultiplicator(nextValue());
    };

    return (
        <button className={className} type="button" onClick={handleChangeMultiplicator}>
            Passer en X{nextValue()}
        </button>
    );
};

const StyledMultiplicator = styled(Multiplicator)`
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

export default StyledMultiplicator;

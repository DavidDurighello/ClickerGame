import { atom } from 'recoil';

const MultiplicatorAtom = atom({
    key: 'multiplicator',
    default: 1,
});

export default MultiplicatorAtom;

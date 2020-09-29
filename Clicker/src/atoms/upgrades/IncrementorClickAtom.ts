import { atom } from 'recoil';

const IncrementorClickAtom = atom({
    key: 'incrementorClick',
    default: 1,
});

export default IncrementorClickAtom;

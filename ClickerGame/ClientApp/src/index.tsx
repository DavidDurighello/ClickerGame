import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";
import Application from './Application';

const rootElement = document.getElementById('root');

ReactDOM.render(<RecoilRoot>
    <Application />
</RecoilRoot>, rootElement);
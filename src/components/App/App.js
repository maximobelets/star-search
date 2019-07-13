import React from 'react';
import Input from '../Input/Input';
import MainBlock from '../MainBlock/MainBlock';
import Examples from '../Examples/Examples';
import About from '../About/About';

const App = () => {
    return(
        <main>
            <h4>StarSearch</h4>
            <Input />
            <MainBlock />
            <Examples />
            <About />
        </main>
    );
};

export default App;
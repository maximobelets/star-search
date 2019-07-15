import React from 'react';
import './app.css';
import Input from '../Input/Input';
import MainBlock from '../MainBlock/MainBlock';
import Examples from '../Examples/Examples';
import About from '../About/About';

const App = () => {
    return(
        <main className='main'>
            <h4 className='main__title'>StarSearch</h4>
            <Input />
            <section className='data-block'>
                <Examples />
                <MainBlock />
            </section>
            <About />
        </main>
    );
};

export default App;
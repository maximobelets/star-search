import React from 'react';
import './mainblock.css';

class MainBlock extends React.Component {
    state = {

    };

    render () {
        return(
            <section className='main-block'>
                <h4>Name</h4>
                <ul className='main-block__list'>
                    <li>
                        Date of birth
                    </li>
                    <li>
                        Homeworld
                    </li>
                    <li>
                        Films
                    </li>
                    <li>
                        Starships
                    </li>
                </ul>
            </section>
        );
    };
};

export default MainBlock;
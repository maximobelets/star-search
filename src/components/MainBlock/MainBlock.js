import React from 'react';
import './mainblock.css';

class MainBlock extends React.Component {
    state = {

    };

    render () {
        return(
            <section>
                <h4>Name</h4>
                <ul>
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
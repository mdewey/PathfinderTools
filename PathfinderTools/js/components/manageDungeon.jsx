import React from 'react';
import { Link } from 'react-router-dom';

class ManageDungeon extends React.Component {

    constructor(props) {
        super(props);
        console.log(["manage", "ctor", props]);
        this.state = {
            isLoading: false
        };

    };


    render() {
        console.log(['manage', 'render', this.state])
        return <section>
            hello manage!
        </section>
    } // end of render
} //end of class


module.exports = ManageDungeon;
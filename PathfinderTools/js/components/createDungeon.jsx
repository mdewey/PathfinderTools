import React from 'react';
import { Link } from 'react-router-dom';

//THought I shouldnt have any ajax calls in here
class CreateDungeon extends React.Component {

    constructor(props) {
        super(props);
        console.log(["room", "ctor", props]);
        this.state = {

        };
    };

    componentWillReceiveProps(nextProps) {
        console.log(['room', 'props', nextProps, this.props, this.state])
        this.setState((p, n) => {
            return {
                currentRoom: nextProps.selectedRoom,
                dungeon: nextProps.dungeon
            }
        })
    }

    render() {
        console.log(['create', 'render', this.state])
        return <section>
            lets create something
           </section>
    } // end of render
} //end of class


module.exports = CreateDungeon;
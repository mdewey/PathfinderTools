import React from 'react';
import { Link } from 'react-router-dom';
import NavigationList from './navigationList'
import Traps from './trap'


//THought I shouldnt have any ajax calls in here
class SelectedRoom extends React.Component {

    constructor(props) {
        super(props);
        console.log(["room","ctor",props]);
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

    componentDidMount() {
        console.log(["room","mounting", this.props, this.state])
      
    };

    reverseDirection(direction) {
        if (direction === 'NORTH') {
            return "SOUTH";
        }
        if (direction === 'SOUTH') {
            return "NORTH";
        }
        if (direction === 'EAST') {
            return "WEST";
        }
        if (direction === 'WEST') {
            return "EAST";
        }
        if (direction === 'ABOVE') {
            return "BELOW";
        }
        if (direction === 'BELOW') {
            return "ABOVE";
        }
    }

    render() {

        console.log(['room', 'render', this.state])
        if (this.state.currentRoom) {
            return <section className="room-container">
                <NavigationList title='Prev Room' dungeon={this.state.dungeon} isFlipped = { true} rooms={this.state.currentRoom.comesFrom} />
                <section className="left col-md-8">
                    <header className="row">
                        <div className="col-md-6"><h4><i className="glyphicon glyphicon-map-marker right-bump" /><strong>{this.state.currentRoom.name}</strong></h4></div>
                        <div className="col-md-2 col-md-offset-1"> <h4>Traps: {this.state.currentRoom.traps.length}</h4></div>
                        <div className="col-md-3"> <h4>Creatures: {this.state.currentRoom.creatures.length}</h4></div>
                    </header>
                    <section>
                        {this.state.currentRoom.description}
                    </section>
                    <section className="row space">
                        <Traps traps={this.state.currentRoom.traps}/>
                        {this.state.currentRoom.creatures.map((creature, i) => {
                            return <div className="panel panel-default" key={i}>
                                <div className="panel-body">
                                    {creature.name}
                                </div>
                            </div>
                        })}
                    </section>
                </section>
                <NavigationList title='Next Room' dungeon={this.state.dungeon} isFlipped={false} rooms={this.state.currentRoom.goesToo} />
            </section>
        }
        else {
            return <section>
                <div>loading.....</div>
            </section>
        }
    } // end of render
} //end of class


module.exports = SelectedRoom;
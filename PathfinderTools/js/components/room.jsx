import React from 'react';
import { Link } from 'react-router-dom';


class SelectedRoom extends React.Component {

    constructor(props) {
        super(props);
        console.log("room props", props);
        this.state = {

        };
    };

    loadRoom(id) {
        if (id) {
            fetch("/api/rooms/" + id)
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    console.log("json 1", json)
                    this.setState((prevState, props) => {
                        console.log("updating statue")
                        return {
                            currentRoom: json,
                        }
                    });
                });
        } else {
            console.log("no id to load")
        }
    };

    componentWillReceiveProps(nextProps) {
        console.log(['room', 'props', nextProps, this.props, this.state])
        this.loadRoom(nextProps.selectedRoom.id);
    }

    componentDidMount() {
        console.log("mounting", this.props)
        this.loadRoom(this.props.selectedRoom.id);
        this.setState((prev, nextS) => {
            return {
                dungeon: this.props.dungeon
            }
        })
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
                <section className="right col-md-2">
                    <h4>"Prev" Rooms</h4>
                    <ul>
                        {this.state.currentRoom.comesFrom.map((room, i) => {
                            const name = room.fromRoom.name;
                            const id = room.fromRoom.id;
                            return <li key={i} className="half-space">
                                <Link to={{ pathname: `/dungeon/${this.state.dungeon.id}/room/${id}`, state: { selectedDungeon: this.state.dungeon } }} className={"btn " + (room.isHidden ? "btn-warning" : "btn-primary")}>{name}</Link>
                                <span className="half-space label label-success">{this.reverseDirection(room.direction)}</span>
                                <span className={"half-space label label-warning " + (room.isHidden ? "" : "hidden")}>{room.dcToFind}</span>
                            </li>

                        })}
                    </ul>
                </section>
                <section className="left col-md-8">
                    <header className="row">
                        <div className="col-md-6"><h4><i className="glyphicon glyphicon-map-marker right-bump" /><strong>{this.state.currentRoom.name}</strong></h4></div>
                        <div className="col-md-2 col-md-offset-1"> <h4>Traps: {this.state.currentRoom.traps.length}</h4></div>
                        <div className="col-md-3"> <h4>Creatures: {this.state.currentRoom.creatures.length}</h4></div>
                    </header>
                    <section>
                        {this.state.currentRoom.description}
                    </section>
                    <section>

                        {this.state.currentRoom.traps.map((trap, i) => {
                            return <div className="panel panel-default" key={i}>
                                <div className="panel-body">
                                    {trap.description}
                                </div>
                            </div>
                        })}
                        {this.state.currentRoom.creatures.map((creature, i) => {
                            return <div className="panel panel-default" key={i}>
                                <div className="panel-body">
                                    {creature.name}
                                </div>
                            </div>
                        })}
                    </section>
                </section>
                <section className="right col-md-2">
                    <h4>"Next" Rooms</h4>
                    <ul>
                        {this.state.currentRoom.goesToo.map((room, i) => {
                            const name = room.toRoom.name;
                            const id = room.toRoom.id;
                            return <li key={i} className="half-space">
                                <Link to={{ pathname: `/dungeon/${this.state.dungeon.id}/room/${id}`, state: { selectedDungeon: this.state.dungeon } }} className={"btn " + (room.isHidden ? "btn-warning" : "btn-primary")}>{name}</Link>
                                <span className="half-space label label-success">{room.direction}</span>
                                <span className={"half-space label label-warning " + (room.isHidden ? "" : "hidden")}>{room.dcToFind}</span>
                            </li>

                        })}
                    </ul>
                </section>


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
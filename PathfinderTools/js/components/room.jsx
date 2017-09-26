import React from 'react';
import { Link } from 'react-router-dom';
import RoomList from './navigationList'

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
                <section className="right">
                    <h3>"Prev" Rooms</h3>
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
                <section className="left">
                    <header>currently in {this.state.currentRoom.name}</header>
                    <section>
                        {this.state.currentRoom.description}
                    </section>
                </section>
                <section className="right">
                    <h3>"Next" Rooms</h3>
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
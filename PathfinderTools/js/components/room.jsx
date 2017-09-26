import React from 'react';
import { Link } from 'react-router-dom';


class SelectedRoom extends React.Component {

    constructor(props) {
        super(props);
        console.log("room props", props);
        this.state = {

        };

        this.loadNextRoom = this.loadNextRoom.bind(this);
    };

    //handleClick() {
    //}

    loadNextRoom(evt, newId) {
        console.log("loading ", newId)
        fetch('/api/rooms/' + newId).then(resp => resp.json()).then(json => {
            console.log("loaded next room", json)
            this.setState((p, n) => {
                return {
                    currentRoom: json
                }
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log("receinv props", nextProps.selectedRoom);
        this.setState((prev, nextS) => {
            return {
                currentRoom: nextProps.selectedRoom
            }
        })
    }

    componentDidMount() {
        //  this.loadCurrentRoom();
        console.log("mounting", this.state)
    };


    reverseDirection(direction) {
        if (direction === 'NORTH')
        {
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
        if (this.state.currentRoom) {
            return <section className="room-container">
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
                            return <li key={i}>
                                <button className="btn btn-primary" onClick={evt => this.loadNextRoom(evt, id)}>
                                    {name}
                                </button>&nbsp;
                                <span className="label label-success">{room.direction}</span>

                            </li>
                        })}
                    </ul>
                </section>

                <section className="right">
                    <h3>"Prev" Rooms</h3>
                    <ul>
                        {this.state.currentRoom.comesFrom.map((room, i) => {
                            const name =  room.fromRoom.name;
                            const id = room.fromRoom.id;
                            return <li key={i}>
                                <button className="btn btn-primary" onClick={evt => this.loadNextRoom(evt, id)}>
                                    {name}
                                </button>&nbsp;
                                <span className="label label-success">{this.reverseDirection(room.direction)}</span>

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
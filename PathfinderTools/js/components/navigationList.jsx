import React from 'react';
import { Link } from 'react-router-dom';

//THought I shouldnt have any ajax calls in here
class NavigationList extends React.Component {

    constructor(props) {
        super(props);
        console.log(["nav", "ctor", props]);
        this.state = {
            title: props.title,
            reversed: props.isFlipped,
            rooms: props.rooms,
            dungeon: props.dungeon
        };
    };

    componentWillReceiveProps(nextProps) {
        console.log(['nv', 'props', nextProps, this.props, this.state])
        this.setState((p, n) => {
            return {
                rooms: nextProps.rooms,
                dungeon: nextProps.dungeon
            }
        })
    }

    componentDidMount() {
        console.log(["nav", "mounting", this.props, this.state])
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

        console.log(['nav', 'render', this.state])
        if (this.state.rooms) {
            return <section className="right col-md-2">
                <h4>{this.state.title}</h4>
                <ul>
                    {this.state.rooms.map((room, i) => {
                        const name = room.toRoom ? room.toRoom.name : room.fromRoom.name;
                        const id = room.toRoom ? room.toRoom.id : room.fromRoom.id;
                        return <li key={i} className="half-space">
                            <Link to={{ pathname: `/dungeon/${this.state.dungeon.id}/room/${id}`, state: { selectedDungeon: this.state.dungeon } }} className={"btn " + (room.isHidden ? "btn-warning" : "btn-primary")}>{name}</Link>
                            <span className="half-space label label-success">{this.state.reversed ? this.reverseDirection(room.direction) : room.direction}</span>
                            <span className={"half-space label label-warning " + (room.isHidden ? "" : "hidden")}>{room.dcToFind}</span>
                        </li>

                    })}
                </ul>
            </section>

        }
        else {
            return <section>
                <div>loading.....</div>
            </section>
        }
    } // end of render
} //end of class


module.exports = NavigationList;
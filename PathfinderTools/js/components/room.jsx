import React from 'react';

class SelectedRoom extends React.Component {

    constructor(props) {
        super(props);
        console.log("room props", props);
        this.state = {

        };

        //   this.handleClick = this.handleClick.bind(this);
    };

    //handleClick() {
    //}

    loadCurrentRoom() {

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
                    <h3>Connected Rooms</h3>
                    <ul>
                        {this.state.currentRoom.allRooms.map((room, i) => {
                            return <li key={i}>
                                {room.toRoom.name}
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
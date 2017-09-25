import React from 'react';

class Room extends React.Component {

    constructor(props) {
        super(props);
        const id = parseInt(props.match.params.id, 10)
        const full = props.location.state.selectedDungeon;
        let _data = full || {id};
        this.state = {
            selectedDungeon : _data
        };
     
        //   this.handleClick = this.handleClick.bind(this);
    };

    //handleClick() {
    //}



    componentDidMount() {
      
    };


    render() {
      return <div> Lets go through the dungeon: {this.state.selectedDungeon.name}</div>
    } // end of render
} //end of class


module.exports = Room;
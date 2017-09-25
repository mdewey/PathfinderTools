import React from 'react';

class Room extends React.Component {

    constructor(props) {
        super(props);
        const id = parseInt(props.match.params.id, 10)
        const full = props.location.state.selectedDungeon;
        let _data = full || { id };
        this.state = {
            selectedDungeon: _data,
            needToLoadDungeon: !full
        };

        //   this.handleClick = this.handleClick.bind(this);
    };

    //handleClick() {
    //}

    loadDungeon() {
        if (this.state.needToLoadDungeon) {
            console.log("loading dungeon")
            fetch("/api/dungeons/"+ this.state.selectedDungeon.id)
            .then((response) => {
                console.log("repsonse", response)
                return response.json()
            })
            .then((json) => {
                console.log("json", json)

                this.setState((prevState, props) => {
                    return {
                        selectedDungeon: json,
                        needToLoadDungeon:false
                    }
                });
            });
        } else {
            console.log("no need to reload dungeon details")
        }
    }


    componentDidMount() {
        this.loadDungeon();
    };


    render() {
        if (this.state.needToLoadDungeon) {
            return <div> loading dungeon....</div>
        }
        else {
            return <div> Lets go through the dungeon: {this.state.selectedDungeon.name}</div>
        }
    } // end of render
} //end of class


module.exports = Room;
import React from 'react';
import { Link } from 'react-router-dom';

class Creatures extends React.Component {

    constructor(props) {
        super(props);
        console.log(["creatures", "ctor", props]);
        this.state = {
            creatures: props.creatures,
        };
    };

    componentWillReceiveProps(nextProps) {
        console.log(['creatures', 'props', nextProps, this.props, this.state])
        this.setState((p, n) => {
            return {
                creatures: nextProps.creatures
            }
        })
    }

    render() {

        console.log(['creatures', 'render', this.state])
        return <div className="col-md-6">
            {this.state.creatures.map((creature, i) => {
                return <div className="panel panel-warning" key={i}>
                    <div className="panel-heading">
                        <h3 className="panel-title"><a href={creature.d20PfsrdUrl}>{creature.name}</a> CR {creature.challengeRating}</h3>
                    </div>
                    <div className="panel-body">
                        <p>
                            Tatics
                            <br />
                            {creature.tatics}
                        </p>
                        <p>
                            Morale
                            <br />
                            {creature.morale}
                        </p>
                        <p>
                            stats
                            <br/>
                            HP : {creature.hitPoints}<br/>
                            special abilities: {creature.specialAbilities}<br />
                            <a href={creature.d20PfsrdUrl}>full stat block</a><br />
                            weaknesses: {creature.weaknesses}<br />
                            states: {creature.statistics}<br />
                        </p>
                    </div>
                </div>
            })}
        </div>
    } // end of render
} //end of class


module.exports = Creatures;
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
                let _color = "default";
                if (creature.friendlinessValue > 0) {
                    _color = "success"
                } else if (creature.friendlinessValue < 0) {
                    _color = "danger"
                }
                return <div className={"panel panel-" + _color} key={i}>
                    <div className="panel-heading">
                        <h3 className="panel-title"><a href={creature.d20PfsrdUrl}>{creature.name}</a> CR {creature.challengeRating}</h3>
                    </div>
                    <div className="panel-body">
                        <section>
                            <p className="sub-section-header">
                                Tatics
                            </p>
                            <p className="sub-section-content">
                                {creature.tatics}
                            </p>
                        </section>
                        <section>
                            <p className="sub-section-header">
                                Morale
                            </p>
                            <p className="sub-section-content">{creature.morale}</p>
                        </section>
                        <section>
                            <p className="sub-section-header">
                                stats
                            </p>
                            <section className="sub-section-content">
                                <ul>
                                    <li><span className="sub-header">HP : </span>{creature.hitPoints}</li>
                                    <li><span className="sub-header">special abilities: </span>{creature.specialAbilities || "none"}</li>
                                    <li><span className="sub-header">weaknesses:</span> {creature.weaknesses}</li>
                                    <li><span className="sub-header">Other Stats: </span>{creature.statistics}</li>
                                </ul>
                            </section>
                        </section>
                    </div>
                </div>
            })}
        </div>
    } // end of render
} //end of class


module.exports = Creatures;
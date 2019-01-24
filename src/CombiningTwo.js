import React from 'react';
import { Weather } from './Weather';
import { StateInput } from './StateInput';

export class CombiningTwo extends React.Component {

    isLoading = false;

    state = { 
        chosenState: 'Boise',
        background: ''
    }

    style = {
        overflow: "hidden",
        background: this.state.background,
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
    }

    handleChosen = (value) => {
        this.setState({chosenState: value});
    }

    render() {
        if (this.isLoading === false) {
            return (
                <div style={this.style}>
                    <div className="film">
                        <div className="center">
                        <Weather chosenState={this.state.chosenState} />
                        <StateInput onInput={this.handleChosen} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="lds-ripple"><div></div><div></div></div>
            );
        }
    }
};
import React from 'react';
import { Weather } from './Weather';
import { StateInput } from './StateInput';

export class CombiningTwo extends React.Component {

    state = { 
        chosenState: 'Boise',
        weather: 'Sunny',
        background: `url(https://source.unsplash.com/1920x1080/?=phoenix,boise) no-repeat fixed center` 
    }

    handleChosen = this.handleChosen.bind(this);

    render() {
        return (
            <div>
                <div className="film">
                    <div className="center">
                    <Weather state={this.state.chosenState} />
                    <StateInput onInput={this.handleChosen} />
                    </div>
                </div>
            </div>
        );
    }

    handleChosen(value) {
        this.setState({chosenState: value});
    }
};